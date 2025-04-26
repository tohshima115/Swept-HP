import { create } from 'zustand'

interface AppState {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const useStore = create<AppState>((
  set: (
    partial: AppState | Partial<AppState> | ((state: AppState) => AppState | Partial<AppState>),
    replace?: false
  ) => void
) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
}))

export default useStore