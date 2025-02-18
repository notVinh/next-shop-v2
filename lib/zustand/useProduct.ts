import { ProductPropTypes } from "@/constant/type";
import { create } from "zustand";

type MangaProps = {
  product?: ProductPropTypes[];
  setProduct: (item: ProductPropTypes[]) => void;
};

const useProduct = create<MangaProps>((set) => ({
  product: [],
  setProduct: (item) => set({ product: item }),
}));

export default useProduct;
