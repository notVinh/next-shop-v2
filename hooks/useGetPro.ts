import useProduct from "@/lib/zustand/useProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetPro = (page: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setProduct } = useProduct();
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/product`);
      setProduct(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return { isLoading };
};

export default useGetPro;
