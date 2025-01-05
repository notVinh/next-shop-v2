import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const TrendingCard = () => {
  return (
    <div className="relative">
      <Image
        className="rounded-2xl"
        src={"/images/mansplash.png"}
        alt="pro"
        width={500}
        height={500}
      ></Image>
      <div className="flex-col flex gap-1 m-2 absolute bottom-0">
        <div className="font-bold text-white">{`Men's Lifestyle`}</div>
        <div className="text-xs text-white">Everyday classic kick</div>
        <Button className="bg-white text-black hover:text-white">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default TrendingCard;
