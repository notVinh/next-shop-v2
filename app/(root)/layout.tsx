import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Header />
      <main className="bg-slate-200 text-gray-600 px-1 md:px-2 py-1 flex flex-col gap-1">
        <div className="mt-16"> {children}</div>
      </main>
      <Footer />
      <Toaster />
    </SessionProvider>
  );
}
