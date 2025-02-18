import Image from "next/image";
import React from "react";

const NewItemCard = () => {
  return (
    <div>
      <div className="w-96 h-96 overflow-hidden rounded-2xl">
        <Image
          src={"/images/new.png"}
          alt="pro"
          className="w-auto h-auto"
          width={1000}
          height={1000}
        ></Image>
      </div>
      <div className="flex-col flex gap-1 mt-5 w-full items-center md:items-start">
        <div className="font-bold">Loro Piana</div>
        <div className="text-xs text-gray-400">Slim-Fit Strip</div>
        <div className="font-bold">$65</div>
      </div>
    </div>
  );
};

export default NewItemCard;
