import ProductModel from "@/lib/models/productModel";
import { connectDB } from "@/lib/mongodb/config";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const productId = Number((await params).id);

  // const { searchParams } = new URL(request.url);

  // console.log(searchParams);

  // console.log(productId);

  const data = await ProductModel.findOne({ id: productId });

  return NextResponse.json({
    success: true,
    product: data,
  });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  const productId = Number((await params).id);
  const data = await ProductModel.findOne({ id: productId });
  // console.log(data);
  if (searchParams.get("activechange")) {
    const newData = {
      ...data.toObject(),
      active: !data.active,
    };

    await ProductModel.findOneAndUpdate({ id: productId }, newData);

    return NextResponse.json({
      success: true,
      product: newData,
    });
  }

  return NextResponse.json({
    success: true,
    product: data,
  });
}
