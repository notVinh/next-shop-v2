"use client";

import React, { memo, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CartItemPropTypes, ProductPropTypes } from "@/constant/type";
import AmountSelect from "./custom/AmountSelect";
import { cartStore } from "@/lib/zustand/store";
import { getProductById } from "@/services/queries/productQueries";
import CustomSlider from "./custom/CustomSlider";
import { formatCurrency } from "@/constant/options";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

const EditItem = ({
  setOpen,
  currentData,
}: {
  setOpen: (open: boolean) => void;
  currentData: CartItemPropTypes | null;
}) => {
  const { editCartItem } = cartStore();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductPropTypes | null>(null);

  const [currentSize, setCurrentSize] = useState(currentData?.size);
  const [currentColor, setCurrentColor] = useState(currentData?.color);
  const [currentAmount, setCurrentAmount] = useState(currentData?.amount);

  useEffect(() => {
    if (!isOpen) {
      setOpen(false);
    }
  }, [isOpen, setOpen]);

  useEffect(() => {
    if (isOpen) {
      if (!currentData?.itemId) return;

      getProductById(String(currentData.itemId)).then((data) => {
        if (!data) return; // API lỗi
        setProduct(data.product);
      });
    }
  }, [currentData, isOpen]);

  const confirmCurrentItem = () => {
    editCartItem(currentData?.itemId ?? 0, currentData?.variantId ?? "", {
      itemId: currentData?.itemId ?? 0,
      variantId: `${currentData?.itemId}-${currentSize}-${currentColor}`,
      color: currentColor ?? "",
      size: currentSize ?? "",
      amount: currentAmount ?? 0,
      price: currentData?.price ?? 0,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>
        <Image
          src="/icons/edit.png"
          alt="edit"
          width={10}
          height={10}
          className="w-4 h-4 cursor-pointer"
        ></Image>
      </DialogTrigger> */}
      {product ? (
        <DialogContent className="max-w-[900px] max-h-[550px] rounded-full p-0 flex flex-row overflow-hidden">
          <div className="w-3/6">
            <CustomSlider data={product?.subimage || []} />
          </div>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col flex-1 justify-between">
            <div className="flex flex-col justify-between m-7 ">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold"> {product?.name}</div>
                <div className="text-xl"> {product?.gentle}</div>
                <div className="text-xl font-bold">
                  {formatCurrency(product?.price || 0)}
                </div>
                <div className="flex gap-2">
                  {product?.color?.map((item: string, index: number) => (
                    <Button
                      key={index}
                      className={`w-8 h-8 hover:bg-transparent hover:outline-orange-300 text-text ${
                        currentColor === item
                          ? "outline outline-2 outline-gray-400"
                          : "outline outline-2 outline-none"
                      } ${item && `border-2 bg-${item}-500`}`}
                      onClick={() => setCurrentColor(item)}
                    >
                      {/* {item} */}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  {product?.size?.map((item: string, index: number) => (
                    <Button
                      key={index}
                      className={`rounded-full bg-white text-text hover:bg-transparent hover:outline-orange-300 ${
                        currentSize === item
                          ? "outline outline-2 outline-orange-300"
                          : "outline outline-2 outline-gray-400"
                      }`}
                      onClick={() => setCurrentSize(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                <div>
                  <AmountSelect
                    initialAmount={currentAmount}
                    onAmountChange={(item) => setCurrentAmount(item)}
                  />
                </div>
              </div>
            </div>
            <div>
              <Separator />
              <div className="flex justify-between items-center m-7">
                <Link
                  href={`/product`}
                  className="underline cursor-pointer hover:text-text"
                  onClick={() => setIsOpen(false)}
                >
                  View Full Product
                </Link>
                <Button className="rounded-xl" onClick={confirmCurrentItem}>
                  Update product
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      ) : (
        <div className="w-full h-32 flex justify-center items-center">
          <Image
            src="/icons/loading.svg"
            alt="loading"
            width={30}
            height={30}
          />
        </div>
      )}
    </Dialog>
  );
};

export default memo(EditItem);
