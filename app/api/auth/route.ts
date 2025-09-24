import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import connect from "@/lib/config/db";
import { verifyPassword } from "@/lib/bcypt";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  await connect();
  const userData = await req.json();

  const { email, password } = userData;
  // const { email } = userData;
  const userExists = await UserModel.findOne({ email });

  if (!userExists) {
    return NextResponse.json({
      msg: `${email} không tồn tại, vui lòng tạo tài khoản trước`,
    });
  }

  const verifiedPassword = await verifyPassword(password, userExists.password);

  if (verifiedPassword) {
    if (userExists.isAdmin === true) {
      await generateToken(userExists._id, "admin");
    } else {
      await generateToken(userExists._id, "user");
    }
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
  } else {
    return NextResponse.json({
      success: false,
      msg: "Mật khẩu không đúng",
      user: userExists.email,
    });
  }

  // return NextResponse.json({
  //   success: true,
  //   msg: "Đăng nhập thành công",
  //   user: {
  //     name: userExists.name,
  //     email: userExists.email,
  //     avatar: userExists.avatar,
  //     phone: userExists.phone,
  //     address: userExists.address,
  //   },
  // });
}
