import React from "react";
import ButtonCircle from "./ButtonCircle";
import { Heart, Search } from "lucide-react";
// import useOrder from "@/lib/zustand/useOrder";
import Cart from "../Cart";

const UserAction = () => {
  // const { order } = useOrder();

  // console.log(order);
  return (
    <>
      <ButtonCircle>
        <Search className="w-5 h-5" />
      </ButtonCircle>
      <ButtonCircle>
        <Heart className="w-5 h-5" />
      </ButtonCircle>
      <div className="relative">
        <Cart />

        <div className="absolute top-0 -right-2 bottom-0 rounded-full bg-gray-200 w-5 h-5 flex items-center justify-center">
          12
        </div>
      </div>
    </>
  );
};

export default UserAction;
