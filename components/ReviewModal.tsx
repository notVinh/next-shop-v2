"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
// import useCartStore from "@/lib/zustand/useCartStore";
import { useRouter } from "next/navigation";
// import Success from "./custom/Success";
import toast from "react-hot-toast";
import { cartStore, orderStore } from "@/lib/zustand/store";
import Success from "./custom/Success";
import { adviceTax, formatCurrency, getSum } from "@/constant/options";

const ReviewModal = () => {
  const { clearCart, cartItem } = cartStore();
  const { info, total } = orderStore();
  const [isOpen, setIsOpen] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useRouter();

  const handlePayment = async () => {
    if (info?.method === "Momo") {
      const res = await axios.post("/api/payment/momo", {
        amount: String(total),
        redirectUrl: "http://localhost:3000",
      });
      console.log(res);
      if (res.data.payUrl) {
        navigate.replace(res.data.payUrl);
      }
    } else if (info?.method === "Paypal") {
      const res = await axios.get("/api/payment");
      console.log(res);
    } else if (info?.method === "Cash") {
      // setIsOpen(false);
      setIsSuccess(true);
      clearCart();
      toast.success("Your order has been placed successfully!");
    }
  };

  useEffect(() => {
    if (!isOpen) setIsSuccess(false);
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-full border py-2 bg-black text-white rounded-lg">
          Checkout
        </DialogTrigger>
        <DialogContent>
          {isSuccess ? (
            <Success />
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Confirm Your Infomation</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex flex-col justify-center gap-7 text-gray-600">
                <div>
                  <div className=" font-semibold mb-3 underline"> Ship to:</div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-lg">{info?.name}</div>
                    <div>{info?.phone}</div>
                    <div>{info?.email}</div>
                    <div>{info?.address}</div>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className=" font-semibold mb-3 underline">Detail:</div>
                  <div className="flex">
                    <div className="w-3/4 flex flex-col gap-2">
                      <div>Sub Total:</div>
                      <div>Shipping:</div>
                      <div>Discount:</div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2 items-end">
                      <div>{formatCurrency(getSum(cartItem))}</div>
                      <div>{formatCurrency(adviceTax.shipTax)}</div>
                      <div>{adviceTax.discount}%</div>
                    </div>
                  </div>
                </div>
                <Separator />

                <div>
                  <div className="flex">
                    <div className="w-3/4 flex flex-col gap-2">
                      <div>Total:</div>
                      <div>Payment method:</div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2 items-end">
                      <div>
                        {formatCurrency(
                          getSum(cartItem) +
                            adviceTax.shipTax -
                            (getSum(cartItem) * adviceTax.discount) / 1000
                        )}
                      </div>
                      <div>{info?.method}</div>
                    </div>
                  </div>
                  <Button className="w-full my-5" onClick={handlePayment}>
                    Proceed with payment
                  </Button>
                  <div className="flex justify-center items-center">
                    (This price includes taxes, packaging, shipping and other
                    incidental charges.)
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewModal;
