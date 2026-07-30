import { create } from "zustand"

export interface CartItem {
  id: number
  name: string
  image: string
  color: string
  size: string
  price: number
  quantity: number
}

interface CartStore {
  items: CartItem[]

  addItem: (item: CartItem) => void

  removeItem: (id: number) => void

  increase: (id: number) => void

  decrease: (id: number) => void

  clearCart: () => void

  totalPrice: () => number
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) =>
          i.id === item.id && i.color === item.color && i.size === item.size
      )

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
              ? {
                  ...i,
                  quantity: i.quantity + 1,
                }
              : i
          ),
        }
      }

      return {
        items: [...state.items, item],
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increase: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decrease: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      ),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  totalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}))
