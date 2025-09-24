import connect from "@/lib/config/db";
import OrderModel from "@/lib/models/orderModel";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connect();
  const data = await OrderModel.find();
  return NextResponse.json({
    success: true,
    order: data,
  });
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connect();
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  const productId = Number(params.id);
  const data = await OrderModel.findOne({ id: productId });
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
