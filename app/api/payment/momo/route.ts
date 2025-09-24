// import connect from "@/lib/config/db";
// import ProductModel from "@/lib/models/productModel";
import getMomoUrl from "@/services/momoPayment";
import { NextResponse } from "next/server";

// const loadDB = async () => {
//   await connect();
// };
// loadDB();

export async function POST(req: Request) {
  const body = await req.json();

  // console.log(body.amount);
  const data = await getMomoUrl(body.amount, body.redirectUrl);
  // console.log(data);

  console.log(data);

  return NextResponse.json(data);
}

// export async function POST(req: Request) {
//   const body = await req.json();

//   const {
//     brand,
//     id,
//     type,
//     status,
//     price,
//     amount,
//     name,
//     gentle,
//     image,
//     size,
//     color,
//     desc,
//     instock,
//     subimage,
//   } = body;

//   const newProduct = await ProductModel.create({
//     brand,
//     id,
//     type,
//     status,
//     price,
//     amount,
//     name,
//     gentle,
//     image,
//     subimage,
//     size,
//     color,
//     desc,
//     instock,
//   });

//   console.log(newProduct);

//   return NextResponse.json({ message: "ok" });
// }
