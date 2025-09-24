"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CheckoutModal = ({
  closeCart,
}: {
  closeCart: (value: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full border py-2 bg-black text-white rounded-lg">
        Checkout
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center gap-7">
          <div> You are not loggin, please log in</div>
          <Button>Login</Button>
          <div>or</div>
          <Button
            onClick={() => {
              setIsOpen(false);
              router.push("/checkout");
              closeCart(!isOpen);
            }}
          >
            Buy with guest
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
