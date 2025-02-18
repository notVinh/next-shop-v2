import { ProductPropTypes } from "@/constant/type";
import Image from "next/image";
import React from "react";

const ProductCard = ({ data }: { data: ProductPropTypes }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-64 h-64 overflow-hidden rounded-lg shadow ">
        <Image
          src={data.image}
          alt="product"
          width={350}
          height={350}
          className="hover:scale-110 transition-all cursor-pointer "
        ></Image>
      </div>
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>
  );
};

export default ProductCard;
