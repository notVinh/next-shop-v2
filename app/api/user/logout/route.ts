import { NextResponse } from "next/server";
import { deleteToken } from "@/lib/jwt";

export async function POST() {
  await deleteToken();
  return NextResponse.json({
    success: true,
    msg: "Đã đăng xuất thành công",
  });
}
