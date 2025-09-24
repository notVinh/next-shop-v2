import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const latoFont = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--lato-font",
});

export const metadata: Metadata = {
  title: "Nashies. Difference Is You", // Tiêu đề trang
  description: "Fashion Website.", // Mô tả trang

  icons: {
    // Cấu hình favicon
    icon: "/logo.png", // Đường dẫn đến favicon
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
