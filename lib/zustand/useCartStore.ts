import { CartItemPropTypes } from "@/constant/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  cartItem: CartItemPropTypes[];
  clearCart: () => void;
  setCartItem: (id: number, variantId: string, data: CartItemPropTypes) => void;
  editCartItem: (
    id: number,
    variantId: string,
    updateItem: CartItemPropTypes
  ) => void;
}

export const cartStore = create<CartItem>()(
  persist(
    (set) => ({
      cartItem: [],
      //   setUser: (order) => set({ order }),
      clearCart: () => set({ cartItem: [] }),
      setCartItem: (id, variantId, data) =>
        set((state) => {
          const existItem = state.cartItem.find(
            (item) => item.itemId === id && item.variantId === variantId
          );
          // console.log(existItem);
          if (existItem) {
            return {
              cartItem: state.cartItem.map((item) => {
                // console.log(item);
                if (item.itemId === id && item.variantId === variantId) {
                  return { ...item, amount: item.amount + data.amount };
                }
                return item;
              }),
            };
          }
          return {
            cartItem: [...state.cartItem, { ...data, itemId: id, variantId }],
          };
        }),
      editCartItem: (id, variantId, updateItem) =>
        set((state) => {
          const editItem = state.cartItem.map((item) => {
            if (item.itemId === id && item.variantId === variantId) {
              return { ...item, ...updateItem };
            }
            return item;
          });

          const mergeArray = editItem.reduce(
            (acc: CartItemPropTypes[], currentItem) => {
              const existItem = acc.find(
                (item) =>
                  item.itemId === currentItem.itemId &&
                  item.variantId === currentItem.variantId
              );
              if (existItem) {
                existItem.amount += currentItem.amount;
              } else {
                acc.push(currentItem);
              }

              return acc;
            },
            [] as CartItemPropTypes[]
          );

          return { cartItem: mergeArray };
        }),
    }),
    {
      name: "cartItem", // tên key lưu trữ trong local storage
      // getStorage: () => localStorage, // xác định local storage
    }
  )
);
