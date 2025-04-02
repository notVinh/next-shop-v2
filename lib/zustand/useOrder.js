// import { UserPropTypes } from "@/constant/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// type UserProps = {
//   user: UserPropTypes | null;
//   setUser: (item: UserPropTypes) => void;
//   clearUser: () => void;
// };

// const useUser = create<UserProps>((set) => ({
//   user: null,
//   setUser: (item) => set({ user: item }),
//   clearUser: () => set({ user: null }),
// }));

// export default useUser;

const useOrder = create(
  persist(
    (set) => ({
      order: [],
      setUser: (order) => set({ order }),
      clearUser: () => set({ user: 0 }),
      setOrder: (item) => set(order.push(item)),
    }),
    {
      name: "order", // tên key lưu trữ trong local storage
      getStorage: () => localStorage, // xác định local storage
    }
  )
);

export default useOrder;
