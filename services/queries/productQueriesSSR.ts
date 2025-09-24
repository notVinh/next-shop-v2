// SSR - SEO

import ProductModel from "@/lib/models/productModel";
import { connectDB } from "@/lib/mongodb/config";

export const getAllProductActive = async () => {
  await connectDB();
  const products = await ProductModel.find({ active: true });
  return JSON.parse(JSON.stringify(products)); // Trả về mảng sản phẩm
};

export const getProductById = async (id: string) => {
  await connectDB();
  const product = await ProductModel.findOne({ id });
  return JSON.parse(JSON.stringify(product)); // Trả về mảng sản phẩm
};
