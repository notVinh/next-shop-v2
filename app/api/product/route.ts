import connect from "@/lib/config/db";
import ProductModel from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connect();
  const searchParams = req.nextUrl.searchParams;
  const isActive = searchParams.get("active");

  if (isActive === "true") {
    const data = await ProductModel.find({ active: true });
    return NextResponse.json(data);
  }
  const data = await ProductModel.find();

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await connect();
  const body = await req.json();

  const {
    brand,
    id,
    type,
    status,
    price,
    amount,
    name,
    gentle,
    image,
    size,
    color,
    desc,
    instock,
    subimage,
  } = body;

  const newProduct = await ProductModel.create({
    brand,
    id,
    type,
    status,
    price,
    amount,
    name,
    gentle,
    image,
    subimage,
    size,
    color,
    desc,
    instock,
  });

  // console.log(newProduct);

  return NextResponse.json(
    { message: "ok", product: newProduct },
    { status: 201 }
  );
}
