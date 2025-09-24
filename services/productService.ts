import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`/api/product`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchActiveProducts = async () => {
  try {
    const response = await axios.get(`/api/product?active=true`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await axios.get(`/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const changeActiveProduct = async (id: string) => {
  try {
    const response = await axios.post(`/api/product/${id}?activechange=true`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
