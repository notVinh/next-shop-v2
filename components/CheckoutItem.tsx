"use client";

import { adviceTax, formatCurrency, getSum } from "@/constant/options";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { TicketPercent } from "lucide-react";
import { cartStore, orderStore } from "@/lib/zustand/store";
import { useEffect } from "react";

const CheckoutItem = () => {
  const { cartItem } = cartStore();
  const { setTotal } = orderStore();

  useEffect(() => {
    const subtotal = getSum(cartItem);
    const shipping = 15000;
    const discount = (subtotal * 10) / 1000;
    const total = subtotal + shipping - discount;
    setTotal(total);
  }, [cartItem, setTotal]);

  return (
    <>
      <div className="overflow-y-scroll h-80 pr-5">
        {cartItem.map((item, index: number) => (
          <div key={index} className="flex justify-between gap-4 border-b py-3">
            <Image
              src={item.image ? item.image : "/images/airmax.png"}
              alt="item"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>
            <div className="flex justify-between items-center flex-1">
              <div className="flex flex-col text-sm">
                <div>{item?.name}</div>
                <div>Brand: Nike</div>
                <div>Color: {item.color}</div>
                <div>Size: {item.size}</div>
              </div>
              <div className="flex gap-10">
                <div>x{item.amount}</div>
                <div>{formatCurrency(item.price || 0)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pr-5 pt-5">
        <div className="flex items-center border-2 rounded-xl overflow-hidden px-3">
          <TicketPercent />
          <input type="text" className="outline-none flex-1 p-2" />
          <div className="text-blue-500">Apply</div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>{formatCurrency(getSum(cartItem))}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div>{formatCurrency(adviceTax.shipTax)}</div>
          </div>
          <div className="flex justify-between">
            <div>Discount</div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full border-2 text-xs font-bold flex justify-center items-center px-1 bg-black text-white">
                {adviceTax.discount}%
              </div>
              <div className="">
                {formatCurrency((getSum(cartItem) * adviceTax.discount) / 1000)}
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between mb-5">
          <div>Total</div>
          <div>
            {formatCurrency(
              getSum(cartItem) +
                adviceTax.shipTax -
                (getSum(cartItem) * adviceTax.discount) / 1000
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
