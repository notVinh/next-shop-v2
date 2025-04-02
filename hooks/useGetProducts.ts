import { fetchProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });

  return { isLoading, data };
};

export default useGetProducts;
