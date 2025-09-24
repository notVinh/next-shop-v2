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
import jwt from "jsonwebtoken";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  //   if (url.pathname.startsWith("/api") || url.pathname.startsWith("/admin")) {
  if (url.pathname.startsWith("/admin")) {
    const token =
      req.cookies.get("token")?.value ||
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        role: string;
      };
      if (decoded.role !== "admin") {
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
