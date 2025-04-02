import connect from "@/lib/config/db";
import ProductModel from "@/lib/models/productModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connect();
};
loadDB();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const productId = Number((await params).id);

  // const { searchParams } = new URL(request.url);

  // console.log(searchParams);

  const data = await ProductModel.findOne({ id: productId });

  return NextResponse.json({
    success: true,
    product: data,
  });
}
