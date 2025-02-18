import connectToDatabase from "@/lib/config/db";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/bcypt/index";

const loadDB = async () => {
  await connectToDatabase();
};
loadDB();

export async function POST(req: Request) {
  const userData = await req.json();

  const { email, name, password } = userData;

  console.log(email, name, password);

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return NextResponse.json({
      msg: `${email} đã tồn tại`,
    });
  } else {
    const hashedPassword = await hashPassword(password);
    const newUser = await UserModel.create({
      email,
      name,
      password: hashedPassword,
    });
    return NextResponse.json({
      success: true,
      msg: "Đã tạo tài khoản thành công",
      user: newUser,
    });
  }
}
