"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import CheckoutModal from "./CheckoutModal";
import ButtonCircle from "./custom/ButtonCircle";
import ConfirmModal from "./custom/ConfirmModal";
import EditItem from "./EditItem";
import { formatCurrency, getSum } from "@/constant/options";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cartStore, userStore } from "@/lib/zustand/store";
import { CartItemPropTypes, ProductPropTypes } from "@/constant/type";
import { getProductByIdCSR } from "@/services/queries/productQueries";

const Cart = () => {
  const { clearCart, cartItem } = cartStore();
  const { user } = userStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [currentProduct, setcurrentProduct] =
    React.useState<ProductPropTypes>();
  const [currentCartItem, setcurrentCartItem] =
    React.useState<CartItemPropTypes>();

  const getProductDetail = async (item: CartItemPropTypes) => {
    setOpenEdit(true);
    setcurrentCartItem(item);
    const data = await getProductByIdCSR(item?.itemId || 0);
    setcurrentProduct(data.product);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="relative">
            <ButtonCircle>
              <ShoppingBag className="w-5 h-5" />
              {cartItem.length > 0 && (
                <div className="absolute top-0 -right-2 bottom-0 rounded-full bg-gray-500 text-white w-5 h-5 flex items-center justify-center">
                  {cartItem.length}
                </div>
              )}
            </ButtonCircle>
          </div>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle className="text-text">Your Cart</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <span className="flex justify-end items-center">
            {cartItem.length > 0 && (
              <ConfirmModal title="clear cart" action={clearCart} />
            )}
          </span>
          <div className="flex flex-col justify-between h-[40rem] py-4 ">
            {cartItem.length < 1 && (
              <div className="flex flex-col items-center justify-center h-full gap-4 mt-28">
                <Image
                  src={"/icons/empty-bag.png"}
                  alt="emptycart"
                  width={150}
                  height={150}
                  className="opacity-50"
                ></Image>
                <div>Your bag is empry, you should buy something</div>
              </div>
            )}
            <div className="flex flex-col gap-4 overflow-y-auto h-[30rem]">
              {cartItem.map((item, index: number) => (
                <div key={index}>
                  <div className="flex justify-between gap-4">
                    <Image
                      src={item.image ? item.image : "/images/airmax.png"}
                      alt="item"
                      width={50}
                      height={50}
                      className="w-20 h-20 rounded-lg"
                    ></Image>
                    <div className="flex justify-between items-center flex-1">
                      <div className="flex flex-col text-sm">
                        <div>{item.name}</div>
                        {/* <div>Brand: Nike</div> */}
                        <div>Color: {item.color}</div>
                        <div>Size: {item.size}</div>
                        <Image
                          src="/icons/edit.png"
                          alt="edit"
                          width={10}
                          height={10}
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => getProductDetail(item)}
                        ></Image>
                      </div>

                      <div>x{item.amount}</div>
                      <div>{formatCurrency(item.price || 0)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cartItem.length > 0 && (
              <div>
                {/* <Separator className="my-4" />
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>30</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>30</div>
                  </div>
                  <div className="flex justify-between">
                    <div>discount</div>
                    <div>30</div>
                  </div>
                </div> */}
                <Separator className="my-4" />
                <div className="flex justify-between">
                  <div>Total</div>
                  <div>{formatCurrency(getSum(cartItem))}</div>
                </div>
                {user ? (
                  <Button
                    asChild
                    className="w-full border py-2 bg-black text-white rounded-lg"
                  >
                    <Link href={"/checkout"} onClick={() => setIsOpen(false)}>
                      <div className="text-base">Checkout</div>
                    </Link>
                  </Button>
                ) : (
                  <CheckoutModal closeCart={(item) => setIsOpen(item)} />
                )}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
      {openEdit && (
        <EditItem
          setOpen={(item) => setOpenEdit(item)}
          currentProduct={currentProduct}
          currentCartItem={currentCartItem}
        />
      )}
    </>
  );
};

export default Cart;
