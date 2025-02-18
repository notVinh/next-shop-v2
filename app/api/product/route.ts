import connectToDatabase from "@/lib/config/db";
import ProductModel from "@/lib/models/productModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectToDatabase();
};
loadDB();

export async function GET() {
  const data = await ProductModel.find();
  return NextResponse.json(data);
}
