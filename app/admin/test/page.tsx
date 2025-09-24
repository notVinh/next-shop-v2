// app/admin/products/[id]/page.tsx
// import { notFound } from "next/navigation";
import Image from "next/image";
// import { fetchProductById } from "@/services/productService";
// import { Product } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Edit, Trash2 } from "lucide-react"; // Import icons mới
import Link from "next/link";

// Giao diện cho props của trang
interface AdminProductDetailPageProps {
  params: Promise<{ id: string }>;
}

const AdminProductDetailPage = async ({}: // params
AdminProductDetailPageProps) => {
  const product = {
    brand: "nike",
    id: 3,
    type: "Basketball Shoes",
    status: "is active",
    price: "3089000",
    name: "Luka 3 PF",
    gentle: "unisex",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d741e35-178e-45aa-b8f1-e5346f8f12bd/JORDAN+LUKA+3+PF.png",
    subimage: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78211a33-db46-482b-9e60-b38d90e4b8cd/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00309380-009c-4181-b85c-cf95032277bc/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a37de507-b901-4540-b3f7-ad8294679a11/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9184f88f-646b-4824-8d3f-0989f733ab08/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9485acd4-168b-44f3-9d74-084010c52090/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/69952c4e-f2d3-468d-8a16-a3274ad991a7/JORDAN+LUKA+3+PF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0c16073-f80a-4f95-a52b-5bcacb98f4b7/JORDAN+LUKA+3+PF.png",
    ],
    size: ["39", "40"],
    color: ["red", "blue"],
    desc: "Shift your game into high gear with the lightest Luka yet. Designed to help you create space through acceleration, the Luka 3 features full-length Cushlon 3.0 foam for a smooth heel-to-toe transition. A strong but flexible plate underfoot brings lateral containment, helping you drive out of your step-back to attack the basket. We built speed into the design as well, helping you look 100 as you blow past.",
    instock: true,
    active: false,
    amount: 3,
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      {/* Header và nút quay lại */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin/products">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại danh sách
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">
          Chi tiết sản phẩm: {product.name}
        </h1>
        <div className="flex gap-2">
          {/* Các nút hành động cho Admin (có thể là Client Component) */}
          <Button variant="default">
            <Edit className="mr-2 h-4 w-4" /> Chỉnh sửa
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Xóa
          </Button>
        </div>
      </div>
      <Separator className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Gallery hình ảnh sản phẩm */}
        <div className="lg:col-span-1 flex flex-col items-center">
          <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: "contain" }}
              className="p-2 bg-gray-50"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto w-full">
            {product.subimage.map((imgUrl, index) => (
              <div
                key={index}
                className="relative w-24 h-24 rounded-md overflow-hidden border cursor-pointer hover:border-blue-500 transition-colors"
              >
                <Image
                  src={imgUrl}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="p-1 bg-gray-50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Thông tin chi tiết sản phẩm */}
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
            <p className="text-gray-700">
              **ID sản phẩm:**{" "}
              <span className="font-semibold">{product.id}</span>
            </p>
            {/* <p className="text-gray-700">
              **ID nội bộ (_id):**{" "}
              <span className="font-semibold">{product._id}</span>
            </p> */}
            <p className="text-gray-700">
              **Thương hiệu:**{" "}
              <span className="font-semibold capitalize">{product.brand}</span>
            </p>
            <p className="text-gray-700">
              **Loại:**{" "}
              <span className="font-semibold capitalize">{product.type}</span>
            </p>
            <p className="text-gray-700">
              **Giới tính:**{" "}
              <span className="font-semibold capitalize">{product.gentle}</span>
            </p>
            <p className="text-gray-700">
              **Số lượng tồn kho:**{" "}
              <span className="font-semibold">{product.amount}</span>
            </p>
            <p className="text-gray-700">
              **Trạng thái kích hoạt:**{" "}
              <span
                className={`font-semibold ${
                  product.active ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.active ? "Đang hoạt động" : "Không hoạt động"}
              </span>
            </p>
            <p className="text-gray-700">
              **Tình trạng tồn kho:**{" "}
              <span
                className={`font-semibold capitalize ${
                  product.instock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.instock ? "Còn hàng" : "Hết hàng"}
              </span>
            </p>
            {/* <p className="text-gray-700 col-span-1 sm:col-span-2">
              **Giá:**{" "}
              <span className="text-xl font-bold text-red-600">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </span>
            </p> */}
          </div>

          <Separator className="my-6" />

          {/* Kích cỡ */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">Kích cỡ hiện có:</h3>
            <div className="flex flex-wrap gap-2">
              {product.size.length > 0 ? (
                product.size.map((size, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border rounded-md bg-gray-100 text-gray-800 text-sm font-medium"
                  >
                    {size}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">
                  Không có thông tin kích cỡ.
                </span>
              )}
            </div>
          </div>

          {/* Màu sắc */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Màu sắc hiện có:</h3>
            <div className="flex flex-wrap gap-3 items-center">
              {product.color.length > 0 ? (
                product.color.map((color, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 shadow-sm"
                    style={{
                      backgroundColor: color.toLowerCase(),
                      borderColor:
                        color.toLowerCase() === "white"
                          ? "#ccc"
                          : color.toLowerCase(),
                    }}
                    title={color} // Thêm tooltip để biết màu
                  ></div>
                ))
              ) : (
                <span className="text-gray-500">
                  Không có thông tin màu sắc.
                </span>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Mô tả sản phẩm */}
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">Mô tả sản phẩm:</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {product.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetailPage;
