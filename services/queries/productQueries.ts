import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/product`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
