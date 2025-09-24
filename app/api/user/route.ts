import connectDB from "@/lib/config/db";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
// import { hashPassword } from "@/lib/bcypt/index";

export async function GET() {
  await connectDB();
  const data = await UserModel.find();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await connectDB();
  const userData = await req.json();

  const { email, name, password } = userData;

  // console.log(email, name, password);

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return NextResponse.json({
      msg: `${email} đã tồn tại`,
    });
  } else {
    // const hashedPassword = await hashPassword(password);
    const newUser = await UserModel.create({
      email,
      name,
      password,
      // password: hashedPassword,
    });
    return NextResponse.json({
      success: true,
      msg: "Đã tạo tài khoản thành công",
      user: newUser,
    });
  }
}
