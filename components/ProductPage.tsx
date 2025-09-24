import React, { memo } from "react";
import ProductCard from "./custom/ProductCard";
import { ProductPropTypes } from "@/constant/type";
import PaginationUi from "./custom/PaginationUi";
import Image from "next/image";
import { getAllProductActive } from "@/services/queries/productQueriesSSR";

const ProductPage = async () => {
  const product = await getAllProductActive();

  return (
    <div className=" rounded-xl min-h-[64rem] flex flex-col justify-between">
      <div className="flex-1 flex flex-row  items-start justify-start">
        <div className="w-full flex flex-row flex-wrap gap-10 p-6 justify-center md:justify-start">
          {!product ? (
            <div className="w-full h-32 flex justify-center items-center">
              <Image
                src="/icons/loading.svg"
                alt="loading"
                width={30}
                height={30}
              />
            </div>
          ) : (
            product?.map((item: ProductPropTypes, index: number) => (
              <ProductCard key={index} data={item} />
            ))
          )}
        </div>
      </div>
      <div className="">
        <PaginationUi />
      </div>
    </div>
  );
};

export default memo(ProductPage);
