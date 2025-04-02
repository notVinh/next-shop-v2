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

const CheckoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {!isOpen ? (
          <>
            <div className="flex flex-col justify-center items-center gap-7">
              <div> You are not loggin, please log in</div>
              <Button>Login</Button>
              <div>or buy with guest</div>
              <Button onClick={() => setIsOpen(true)}>Buy with guest</Button>
            </div>
          </>
        ) : (
          <>Oke</>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
