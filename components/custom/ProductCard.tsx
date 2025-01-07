import Image from "next/image";
import React from "react";

type ProductTypeProps = {
  name: string;
  color: Array<string>;
  gender: Array<string>;
  id: number;
  image: string;
  instock: boolean;
  price: number;
  size: Array<string>;
  subimage: Array<string>;
  type: string;
};

const ProductCard = ({ data }: { data: ProductTypeProps }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-72 h-72 overflow-hidden rounded-lg shadow ">
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
