import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const RecommenItemCard = () => {
  return (
    <div className="relative">
      <Image
        className="w-96 h-96 rounded-2xl"
        src={"/images/new.png"}
        alt="pro"
        width={300}
        height={300}
      ></Image>
      <div className="flex-col flex gap-1 p-3 absolute bottom-0 left-0">
        <div className="font-bold text-3xl">Nike Dunk</div>
        <Button className="rounded-full w-20">Shop now</Button>
      </div>
    </div>
  );
};

export default RecommenItemCard;
