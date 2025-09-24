import React from "react";

// import useGetProducts from "@/hooks/useGetProducts";
import ProductTable from "@/components/adminUI/ProductTable";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProducts } from "@/services/productService";

const page = async () => {
  // const { data, isLoading } = useGetProducts();

  // console.log(data);
  const queryClient = new QueryClient();

  // 1. Prefetch dữ liệu sản phẩm trên SERVER
  // Dữ liệu này sẽ được fetch và đưa vào HTML khi trang được server render.
  try {
    await queryClient.prefetchQuery({
      // Chỉ rõ kiểu dữ liệu
      queryKey: ["product"], // Key phải khớp với useGetProducts hook
      queryFn: fetchProducts,
      // Tùy chọn: next: { revalidate: 60 } nếu bạn muốn ISR cho trang admin này (ít phổ biến hơn cho admin pages)
      // Tùy chọn: cache: 'no-store' nếu bạn muốn SSR thuần túy (dữ liệu luôn mới nhất cho mỗi request)
    });
  } catch (error) {
    console.error("Error prefetching products for admin page:", error);
    // Xử lý lỗi prefetch ở đây, ví dụ: hiển thị thông báo lỗi chung
    // Bạn có thể chọn trả về một trang lỗi hoặc hiển thị thông báo trong UI
    // Đối với trang admin, thường thì việc hiển thị một phần rỗng và thông báo lỗi là chấp nhận được
  }

  // 2. Dehydrate trạng thái của QueryClient để gửi sang client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="bg-white p-3 rounded-lg flex-1 ml-1">
      Product list
      <HydrationBoundary state={dehydratedState}>
        <ProductTable />
      </HydrationBoundary>
    </div>
  );
};

export default page;
