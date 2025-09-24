import { create } from "zustand";

const useSortStore = create((set) => ({
  filterItem: [],
  // setProduct: (item) => set({ product: item }),
  addFilterItem: (item) =>
    set((state) => ({ filterItem: [...state.filterItem, item] })),
  removeFilterItem: (item) => {
    set((state) => {
      const filter = state.filterItem.filter((store) => store !== item);
      return { filterItem: filter };
    });
  },
}));

export default useSortStore;
