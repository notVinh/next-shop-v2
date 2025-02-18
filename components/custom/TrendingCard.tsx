import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const TrendingCard = () => {
  return (
    <div className="relative">
      <div className="w-96 h-96 overflow-hidden rounded-2xl">
        <Image
          className="w-auto h-auto"
          src={"/images/new.png"}
          alt="pro"
          width={1000}
          height={1000}
        ></Image>
      </div>
      <div className="flex-col flex gap-1 p-3 absolute top-0 left-0">
        <div className="font-bold text-3xl">Nike Dunk</div>
        <Button className="rounded-full w-20">Shop now</Button>
      </div>
    </div>
  );
};

export default TrendingCard;
