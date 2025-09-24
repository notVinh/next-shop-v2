import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Trash2 } from "lucide-react"; // Import icons mới
import Link from "next/link";
import ProductDetail from "@/components/adminUI/ProductDetail";

// Giao diện cho props của trang
interface AdminProductDetailPageProps {
  params: {
    id: string; // ID của sản phẩm sẽ được truyền từ URL
  };
}

const AdminProductDetailPage = async ({
  params,
}: AdminProductDetailPageProps) => {
  return (
    <div className=" ml-1 p-3 bg-white rounded-lg shadow-md">
      {/* Header và nút quay lại */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin/product">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại danh sách
          </Button>
        </Link>
        {/* <h1 className="text-3xl font-bold">
          Chi tiết sản phẩm: {product.name}
        </h1> */}
        <div className="flex gap-2">
          {/* Các nút hành động cho Admin (có thể là Client Component) */}
          {/* <Button variant="default">
            <Edit className="mr-2 h-4 w-4" /> Chỉnh sửa
          </Button> */}
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Xóa
          </Button>
        </div>
      </div>
      <Separator className="mb-8" />
      <ProductDetail id={params.id} />
    </div>
  );
};

export default AdminProductDetailPage;
