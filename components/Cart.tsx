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
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CheckoutModal from "./CheckoutModal";
import ButtonCircle from "./custom/ButtonCircle";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ButtonCircle>
          <ShoppingBag className="w-5 h-5" />
        </ButtonCircle>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>u can buy more</SheetDescription>
        </SheetHeader>
        <>
          <div className="flex flex-col justify-between h-[40rem] py-4">
            <div className="flex justify-between gap-4">
              <Image
                src="/images/airmax.png"
                alt="item"
                width={50}
                height={50}
                className="w-20 h-20 rounded-lg"
              ></Image>
              <div className="flex justify-between items-center flex-1">
                <div className="flex flex-col text-sm">
                  <div>Air Max</div>
                  <div>Brand: Nike</div>
                  <div>Color: red</div>
                  <div>Size: 40</div>
                </div>
                <div>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button>click</Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="space-y-2">
                      hihi
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                <div className="flex items-center rounded-full border w-20 justify-around h-10 ">
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
              </div>
            </div>
            <div>
              <Separator className="my-4" />
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
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between">
                <div>total</div>
                <div>30</div>
              </div>
              <Button className="w-full mt-5">Checkout</Button>
              <CheckoutModal />
            </div>
          </div>
        </>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
