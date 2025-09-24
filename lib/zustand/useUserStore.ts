// import { UserPropTypes } from "@/constant/type";
import { UserPropTypes } from "@/constant/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStoreState {
  user: UserPropTypes | null;
  setUser: (user: UserPropTypes) => void;
  clearUser: () => void;
}

export const userStore = create<UserStoreState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: UserPropTypes) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user",
    }
  )
);
