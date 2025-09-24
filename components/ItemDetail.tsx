"use client";
import { formatCurrency } from "@/constant/options";
import { ProductPropTypes } from "@/constant/type";
import { CheckCircle, Heart, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import AmountSelect from "./custom/AmountSelect";
import { cartStore } from "@/lib/zustand/store";

const ItemDetail = ({ product }: { product: ProductPropTypes }) => {
  const { setCartItem } = cartStore();
  const [isConfirm, setIsConfirm] = useState(false);
  const [color, setColor] = useState(product?.color?.[0]);
  const [size, setSize] = useState(product?.size?.[0]);
  const [amount, setAmount] = useState(1);

  const setAnimation = () => {
    setIsConfirm(true);
    if (product) {
      setCartItem(product.id ?? 0, `${product.id}-${size}-${color}`, {
        itemId: product.id ?? 0,
        variantId: `${product.id}-${size}-${color}`,
        image: product.image ?? "",
        name: product.name ?? "",
        size: size ?? "",
        color: color ?? "",
        amount: amount,
        price: product.price ?? 0,
      });
    }

    setTimeout(() => {
      setIsConfirm(false);
    }, 1000);
  };

  return (
    <div className="  justify-between flex">
      <div className="flex justify-center w-1/2 gap-4 ">
        <div className="flex-col flex gap-3">
          {product?.subimage?.map((item: string, index: number) => (
            <Image
              key={index}
              src={item}
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>
          ))}
        </div>
        <div className="w-[500px] h-96 rounded-2xl">
          <Image
            src={product?.image || "/placeholder-image.png"}
            alt="productimg"
            className="w-auto h-auto rounded-lg"
            width={1000}
            height={1000}
            priority
          ></Image>
        </div>
      </div>
      <div className="w-1/2 flex-col flex gap-5">
        <div className="text-2xl font-bold">
          <div className="text-gray-500 text-sm font-semibold">
            Brand: {product?.brand?.toUpperCase()} / ID: {product?.id}
          </div>
          {product?.name?.toUpperCase()}
        </div>
        <div className="flex">
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="ml-3"> 21 reviews</div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-xl font-semibold">
            {formatCurrency(product?.price ?? 0)}
          </div>
          {/* <div className="text-xl font-semibold line-through text-gray-400">
          16$
        </div> */}
          {/* <Button className="rounded-full h-8">20%</Button> */}
        </div>
        <div className="bg-gray-50 rounded-lg border p-2">
          <p className="ext-gray-700 leading-relaxed whitespace-pre-wrap">
            {product?.desc}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          Size
          {product?.size?.map((item: string, index: number) => (
            <Button
              key={index}
              className={`rounded-full ${
                size === item ? "bg-green-400   " : "bg-white text-black"
              }`}
              onClick={() => setSize(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          Color
          {product?.color?.map((item: string, index: number) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full border-2 shadow-sm"
              style={{
                backgroundColor: item.toLowerCase(),
                borderColor:
                  item.toLowerCase() === "white" ? "#ccc" : item.toLowerCase(),
              }}
              title={item} // Thêm tooltip để biết màu
              onClick={() => setColor(item)}
            ></div>
          ))}
        </div>
        <div className="flex-col flex gap-3 ">
          Amount
          <div className="flex gap-2 items-center">
            <AmountSelect onAmountChange={(item) => setAmount(item)} />

            <div className="flex-1 flex justify-center items-center">
              <Button
                className={`rounded-full h-10 transition-all duration-300 overflow-hidden ${
                  isConfirm ? "w-10 bg-green-400" : "w-full"
                }`}
                onClick={setAnimation}
              >
                {isConfirm ? <CheckCircle /> : <>Add to cart</>}
              </Button>
            </div>
            {/* {isConfirm && (
              <Image
                src={"/icons/addtocart.gif"}
                alt="addtocart"
                width={42}
                height={42}
              ></Image>
            )} */}

            <Button className="rounded-full w-10 h-10">
              <Heart />
            </Button>
          </div>
          {/* <div>
            <Button className="rounded-full w-full">Buy now</Button>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <div>Ships for free the week of June 16th. </div>
        </div>
        <div>Prople</div>
        <div>Deep detail</div>
      </div>
    </div>
  );
};

export default ItemDetail;
