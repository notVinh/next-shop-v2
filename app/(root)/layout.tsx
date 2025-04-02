"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <main className="bg-slate-200 px-1 md:px-2 py-1 flex flex-col gap-1">
          <Header />
          <div className="mt-16"> {children}</div>
          <section className="hidden md:block">
            <Footer />
          </section>
          <Toaster />
        </main>
      </SessionProvider>
    </QueryClientProvider>
  );
}
