import { deleteToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST() {
  await deleteToken();
  return NextResponse.json({
    success: true,
    msg: "Bạn đã đăng xuất thành công",
  });
}
