import { create } from 'zustand'
import { News } from '../types/news'

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
      const res = await fetch('/api/news');
      if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
      }
      const data: News[] = await res.json();
      set({ newsList: { data, lastFetched: now } })
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
      const res = await fetch(`/api/news/${id}`);
      if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
      }
      const data: News = await res.json();
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