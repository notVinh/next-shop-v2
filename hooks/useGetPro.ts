import axios from "axios";
import { useEffect, useState } from "react";

const useGetPro = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/product`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return { data };
};

export default useGetPro;
