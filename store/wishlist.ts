import { create } from "zustand"

interface WishlistItem {
  id: number
  image: string
  color: string
  size: string
}

interface WishlistStore {
  items: WishlistItem[]
  add: (item: WishlistItem) => void
  remove: (id: number) => void
}

export const useWishlist = create<WishlistStore>((set) => ({
  items: [],
  add: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  remove: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}))
