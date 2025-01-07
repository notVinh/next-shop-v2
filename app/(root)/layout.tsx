import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-slate-200 px-1 md:px-3 py-1 flex flex-col gap-1">
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
}
