import useProduct from "@/lib/zustand/useProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetProductInfo = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState();
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/product/${id}`);
      setProduct(response.data.product);
      setIsLoading(false);
      // return response.data;
    } catch (error) {
      console.log(error);
      // return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, product };
};

export default useGetProductInfo;
