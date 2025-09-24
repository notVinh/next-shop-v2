// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default async function middleware(req: NextRequest) {
//   const session = await auth();

//   // Nếu chưa login -> redirect về trang login
//   if (!session) {
//     return NextResponse.redirect(new URL("/sign-up", req.url));
//   }

//   return NextResponse.next();
// }

// // Áp dụng middleware cho route cần bảo vệ
// export const config = {
//   matcher: ["/profile/:path*"],
// };

// export { auth as middleware } from "@/auth"

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload; // { id, role, ... }
  } catch (e) {
    console.log(e);
  }
}

export default async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const url = req.nextUrl;

  //   if (url.pathname.startsWith("/api") || url.pathname.startsWith("/admin")) {
  if (url.pathname.startsWith("/admin")) {
    const token =
      cookieStore.get("jwt")?.value ||
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
      const decoded = await verifyToken(token);
      if (decoded?.role !== "admin") {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
      }
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
};
