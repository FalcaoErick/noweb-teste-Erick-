import { create } from 'zustand'
import type { ViaCep } from '../types/viacep'

type UiState = {
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  lastQuery?: string
  result?: ViaCep
  history: ViaCep[]
  setSearchResult: (q: string, r?: ViaCep) => void
}

export const useUiStore = create<UiState>((set) => ({
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  lastQuery: undefined,
  result: undefined,
  history: [],
  setSearchResult: (q, r) =>
    set((s) => ({
      lastQuery: q,
      result: r,
      history: r ? [r, ...s.history].slice(0, 10) : s.history
    })),
}))