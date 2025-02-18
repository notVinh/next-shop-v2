import { UserPropTypes } from "@/constant/type";
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

const useStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user", // tên key lưu trữ trong local storage
      getStorage: () => localStorage, // xác định local storage
    }
  )
);

export default useStore;
