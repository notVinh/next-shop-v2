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
import CustomSlider from "./custom/CustomSlider";
import { formatCurrency } from "@/constant/options";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

const EditItem = ({
  setOpen,
  currentProduct,
  currentCartItem,
}: {
  setOpen: (open: boolean) => void;
  currentProduct?: ProductPropTypes;
  currentCartItem?: CartItemPropTypes;
}) => {
  const { editCartItem } = cartStore();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [cartItemInfo, setCartItemInfo] = useState<CartItemPropTypes>({
    itemId: currentCartItem?.itemId,
    variantId: `${currentCartItem?.itemId}-${currentCartItem?.size}-${currentCartItem?.color}`,
    color: currentCartItem?.color,
    size: currentCartItem?.size,
    amount: currentCartItem?.amount,
    price: currentCartItem?.price,
  });

  useEffect(() => {
    if (!isOpen) {
      setOpen(false);
    }
  }, [isOpen, setOpen]);

  const updateCartItem = () => {
    editCartItem(
      currentCartItem?.itemId || 0,
      currentCartItem?.variantId || "",
      cartItemInfo
    );
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
      {currentProduct ? (
        <DialogContent className="max-w-[900px] max-h-[550px] rounded-full p-0 flex flex-row overflow-hidden">
          <div className="w-3/6">
            <CustomSlider data={currentProduct?.subimage || []} />
          </div>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col flex-1 justify-between">
            <div className="flex flex-col justify-between m-7 ">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">
                  {" "}
                  {currentProduct?.name}
                </div>
                <div className="text-xl"> {currentProduct?.gentle}</div>
                <div className="text-xl font-bold">
                  {formatCurrency(currentProduct?.price || 0)}
                </div>
                <div className="flex gap-2">
                  {currentProduct?.color?.map((item: string, index: number) => (
                    <Button
                      key={index}
                      className={`w-8 h-8 hover:bg-transparent hover:outline-orange-300 text-text ${
                        cartItemInfo?.color === item
                          ? "outline outline-2 outline-gray-400"
                          : "outline outline-2 outline-none"
                      } ${item && `border-2 bg-${item}-500`}`}
                      onClick={() =>
                        setCartItemInfo({ ...cartItemInfo, color: item })
                      }
                    >
                      {/* {item} */}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  {currentProduct?.size?.map((item: string, index: number) => (
                    <Button
                      key={index}
                      className={`rounded-full bg-white text-text hover:bg-transparent hover:outline-orange-300 ${
                        cartItemInfo?.size === item
                          ? "outline outline-2 outline-orange-300"
                          : "outline outline-2 outline-gray-400"
                      }`}
                      onClick={() =>
                        setCartItemInfo({ ...cartItemInfo, size: item })
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                <div>
                  <AmountSelect
                    initialAmount={cartItemInfo.amount}
                    onAmountChange={(amount) =>
                      setCartItemInfo({ ...cartItemInfo, amount })
                    }
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
                <Button className="rounded-xl" onClick={updateCartItem}>
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
