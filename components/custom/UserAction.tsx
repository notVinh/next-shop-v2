import React from "react";
import ButtonCircle from "./ButtonCircle";
import { Heart, Search, ShoppingBag } from "lucide-react";

const UserAction = () => {
  return (
    <>
      <ButtonCircle>
        <Search className="w-5 h-5" />
      </ButtonCircle>
      <ButtonCircle>
        <Heart className="w-5 h-5" />
      </ButtonCircle>
      <ButtonCircle>
        <ShoppingBag className="w-5 h-5" />
      </ButtonCircle>
    </>
  );
};

export default UserAction;
