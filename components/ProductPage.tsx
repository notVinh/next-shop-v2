import React, { memo } from "react";
import ProductCard from "./custom/ProductCard";
// import useGetPro from "@/hooks/useGetPro";
import { ProductPropTypes } from "@/constant/type";
// import useProduct from "@/lib/zustand/useProduct";
import PaginationUi from "./custom/PaginationUi";
import Image from "next/image";
import useGetProducts from "@/hooks/useGetProducts";

const ProductPage = () => {
  // const [page, setPage] = useState(1);
  // const { isLoading } = useGetProducts(1);

  // const { product } = useProduct();

  // // const { set } = useOrder();

  // console.log(product);

  const { data: product, isLoading } = useGetProducts();

  return (
    <div className=" rounded-xl min-h-[64rem] flex flex-col justify-between">
      <div className="flex-1 flex flex-row  items-start justify-start">
        <div className="w-full flex flex-row flex-wrap gap-10 p-6 justify-center md:justify-start">
          {isLoading ? (
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
