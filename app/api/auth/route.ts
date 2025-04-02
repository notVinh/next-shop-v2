import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
// import { verifyPassword } from "@/lib/bcypt/index";
// import { generateToken } from "@/lib/jwt/index";
import connect from "@/lib/config/db";

const loadDB = async () => {
  await connect();
};
loadDB();

export async function POST(req: Request) {
  const userData = await req.json();

  // const { email, password } = userData;
  const { email } = userData;

  const userExists = await UserModel.findOne({ email });

  if (!userExists) {
    return NextResponse.json({
      msg: `${email} không tồn tại, vui lòng tạo tài khoản trước`,
    });
  }

  // const verifiedPassword = await verifyPassword(password, userExists.password);

  // if (verifiedPassword) {
  //   await generateToken(userExists._id);
  //   return NextResponse.json({
  //     success: true,
  //     msg: "Đăng nhập thành công",
  //     user: {
  //       name: userExists.name,
  //       email: userExists.email,
  //       avatar: userExists.avatar,
  //       phone: userExists.phone,
  //       address: userExists.address,
  //     },
  //   });
  // } else {
  //   return NextResponse.json({
  //     success: false,
  //     msg: "Mật khẩu không đúng",
  //     user: userExists.email,
  //   });
  // }

  return NextResponse.json({
    success: true,
    msg: "Đăng nhập thành công",
    user: {
      name: userExists.name,
      email: userExists.email,
      avatar: userExists.avatar,
      phone: userExists.phone,
      address: userExists.address,
    },
  });
}
