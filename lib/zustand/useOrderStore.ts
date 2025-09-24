import { InfoOrderPropTypes } from "@/constant/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OrderItem {
  info?: InfoOrderPropTypes;
  isConfirmInfo: boolean;
  total: number;
  setInfo: (info: InfoOrderPropTypes) => void;
  setConfirmInfo: (confirm: boolean) => void;
  setTotal: (total: number) => void;
}

export const orderStore = create<OrderItem>()(
  persist(
    (set) => ({
      info: undefined,
      isConfirmInfo: false,
      total: 0,
      setTotal: (total) =>
        set(() => ({
          total: total,
        })),
      setInfo: (info: InfoOrderPropTypes) =>
        set(() => ({
          info,
        })),

      setConfirmInfo: (confirm) =>
        set(() => ({
          isConfirmInfo: confirm,
        })),
    }),
    {
      name: "order",
    }
  )
);
