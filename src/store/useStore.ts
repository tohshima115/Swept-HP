import { create } from 'zustand'
import { News, NewsListResponse } from '../types/news'
import { client } from '../lib/microcms'

const CACHE_DURATION = 1000 * 60 * 60 // 1時間

interface NewsCache<T> {
  data: T
  lastFetched: number
}

interface AppState {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  newsList: NewsCache<News[]>
  newsDetails: { [id: string]: NewsCache<News> }
  fetchNewsList: () => Promise<void>
  fetchNewsById: (id: string) => Promise<void>
}

const useStore = create<AppState>((set, get) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),

  newsList: { data: [], lastFetched: 0 },
  newsDetails: {},

  fetchNewsList: async () => {
    const { newsList } = get()
    const now = Date.now()

    if (now - newsList.lastFetched < CACHE_DURATION) {
      // キャッシュが有効な場合は何もしない
      return
    }
    
    try {
      const res = await client.get<NewsListResponse>({ endpoint: 'news' })
      set({ newsList: { data: res.contents, lastFetched: now } })
    } catch (error) {
      console.error('ニュース一覧の取得に失敗しました', error)
    }
  },

  fetchNewsById: async (id: string) => {
    const { newsDetails } = get()
    const now = Date.now()
    const cachedItem = newsDetails[id]

    if (cachedItem && now - cachedItem.lastFetched < CACHE_DURATION) {
      // キャッシュが有効な場合は何もしない
      return
    }
    
    try {
      const data = await client.get<News>({ endpoint: 'news', contentId: id })
      set((state) => ({
        newsDetails: {
          ...state.newsDetails,
          [id]: { data, lastFetched: now },
        },
      }))
    } catch (error) {
      console.error(`ニュース詳細(id: ${id})の取得に失敗しました`, error)
    }
  },
}))

export default useStore