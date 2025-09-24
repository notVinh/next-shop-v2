import { hashPassword } from "@/lib/bcypt";
import connect from "@/lib/config/db";
import { mailOptions, transporter } from "@/lib/email/config";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connect();
  const userData = await req.json();

  const { email, name, password } = userData;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return NextResponse.json({
      msg: `${email} đã tồn tại`,
    });
  } else {
    const hashedPassword = await hashPassword(password);

    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    const otpExpiry = new Date(Date.now() + 2 * 60 * 1000);
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: "Account Verification",
      text: `Your OTP is ${randomOtp}`,
      html: `Your OTP is <strong>${randomOtp} and expires in 2 minutes </strong>`,
    });

    const newUser = await UserModel.create({
      email,
      name,
      password: hashedPassword,
      otp: Number(randomOtp),
      expiry: otpExpiry,
    });

    return NextResponse.json({
      success: true,
      msg: "Đã tạo tài khoản thành công",
      user: { name: newUser.name, email: newUser.email },
    });
  }
}
