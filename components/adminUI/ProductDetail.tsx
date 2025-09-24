"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import useProductStore from "@/lib/zustand/productStore";
import { ProductPropTypes } from "@/constant/type";
import { EditItem } from "./EditItem";

const ProductDetail = ({ id }: { id: string }) => {
  const { adminProduct } = useProductStore();
  const [product, setProduct] = useState<ProductPropTypes | undefined>(
    undefined
  );

  useEffect(() => {
    const selectedProduct = adminProduct.find((item) => item.id === Number(id));
    setProduct(selectedProduct);
    //   console.log(selectedProduct);
  }, [id, adminProduct]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {product !== undefined && <EditItem data={product} />}
      {/* Gallery hình ảnh sản phẩm */}
      <div className="lg:col-span-1 flex flex-col items-center">
        <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden border">
          <Image
            src={product?.image ?? "/placeholder.png"}
            alt={product?.name ?? "Product image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            style={{ objectFit: "contain" }}
            className="p-2 bg-gray-50"
            priority
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto w-full">
          {product?.subimage?.map((imgUrl, index) => (
            <div
              key={index}
              className="relative w-24 h-24 rounded-md overflow-hidden border cursor-pointer hover:border-blue-500 transition-colors"
            >
              <Image
                src={imgUrl}
                alt={`${product?.name} - ${index + 1}`}
                fill
                sizes="100px"
                style={{ objectFit: "contain" }}
                className="p-1 bg-gray-50"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thông tin chi tiết sản phẩm */}
      <div className="lg:col-span-2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{product?.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
          <p className="text-gray-700">
            **ID sản phẩm:**{" "}
            <span className="font-semibold">{product?.id}</span>
          </p>
          {/* <p className="text-gray-700">
            **ID nội bộ (_id):**{" "}
            <span className="font-semibold">{product?._id}</span>
          </p> */}
          <p className="text-gray-700">
            **Thương hiệu:**{" "}
            <span className="font-semibold capitalize">{product?.brand}</span>
          </p>
          <p className="text-gray-700">
            **Loại:**{" "}
            <span className="font-semibold capitalize">{product?.type}</span>
          </p>
          <p className="text-gray-700">
            **Giới tính:**{" "}
            <span className="font-semibold capitalize">{product?.gentle}</span>
          </p>
          <p className="text-gray-700">
            **Số lượng tồn kho:**{" "}
            <span className="font-semibold">{product?.amount}</span>
          </p>
          <p className="text-gray-700">
            **Trạng thái kích hoạt:**{" "}
            <span
              className={`font-semibold ${
                product?.active ? "text-green-600" : "text-red-600"
              }`}
            >
              {product?.active ? "Đang hoạt động" : "Không hoạt động"}
            </span>
          </p>
          <p className="text-gray-700">
            **Tình trạng tồn kho:**{" "}
            <span
              className={`font-semibold capitalize ${
                product?.instock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product?.instock ? "Còn hàng" : "Hết hàng"}
            </span>
          </p>
          <p className="text-gray-700 col-span-1 sm:col-span-2">
            **Giá:**{" "}
            <span className="text-xl font-bold text-red-600">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product?.price ?? 0)}
            </span>
          </p>
        </div>

        <Separator className="my-6" />

        {/* Kích cỡ */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-3">Kích cỡ hiện có:</h3>
          <div className="flex flex-wrap gap-2">
            {Array(product?.size)?.length > 0 ? (
              product?.size?.map((size, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border rounded-md bg-gray-100 text-gray-800 text-sm font-medium"
                >
                  {size}
                </span>
              ))
            ) : (
              <span className="text-gray-500">Không có thông tin kích cỡ.</span>
            )}
          </div>
        </div>

        {/* Màu sắc */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Màu sắc hiện có:</h3>
          <div className="flex flex-wrap gap-3 items-center">
            {Array(product?.color)?.length > 0 ? (
              product?.color?.map((color, index) => (
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
              <span className="text-gray-500">Không có thông tin màu sắc.</span>
            )}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Mô tả sản phẩm */}
        <div className="p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Mô tả sản phẩm:</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {product?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
