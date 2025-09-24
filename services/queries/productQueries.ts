// import ProductModel from "@/lib/models/productModel";
// import { connectDB } from "@/lib/mongodb/config";
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

export const getProductByIdCSR = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    // return {};
  }
};

export const changeActiveProduct = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    // return {};
  }
};
