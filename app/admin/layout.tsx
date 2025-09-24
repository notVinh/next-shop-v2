"use client";
import Header from "@/components/adminUI/Header";
import SideBar from "@/components/adminUI/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="font-work-sans bg-slate-200 px-1 md:px-2 py-1 flex flex-col gap-1">
        <Header />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </main>
    </QueryClientProvider>
  );
}
