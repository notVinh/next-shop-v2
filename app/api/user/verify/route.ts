import UserModel from "@/lib/models/userModel";
import { connectDB } from "@/lib/mongodb/config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const userData = await req.json();

  const { email, otp } = userData;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    if (userExists.otp !== otp) {
      return NextResponse.json({
        msg: `OTP is incorrect`,
      });
    } else if (userExists.expiry && userExists.expiry < new Date()) {
      return NextResponse.json({
        msg: `OTP has expired`,
      });
    } else {
      userExists.isVerified = true;
      return NextResponse.json({
        success: true,
        msg: "Đã tạo tài khoản thành công",
        user: { name: userExists.name, email: userExists.email },
      });
    }
  } else {
    return NextResponse.json({
      success: false,
      msg: "Tài khoản không tồn tại",
    });
  }
}
