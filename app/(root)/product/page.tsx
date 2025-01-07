import ProductPage from "@/components/ProductPage";
import SideBar from "@/components/SideBar";

import React from "react";

const Product = () => {
  return (
    <div className=" flex flex-row gap-2">
      <SideBar />
      <ProductPage />
    </div>
  );
};

export default Product;
