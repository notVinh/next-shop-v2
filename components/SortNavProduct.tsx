"use client";
import React from "react";
import { Search, X } from "lucide-react";
import SortBy from "@/components/custom/SortBy";
import useSortProduct from "@/lib/zustand/useSortProduct";

const SortNavProduct = () => {
  const { filterItem, removeFilterItem } = useSortProduct();

  //   console.log(filterItem);

  return (
    <div className="min-h-10 w-full  bg-white rounded-xl mb-1 p-2 transition">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-10">
          <div className="rounded-full border p-2 flex">
            <input type="text" className="outline-none" />
            <Search className="rounded-full" />
          </div>
          <div>9 result</div>
        </div>
        <SortBy
          data={[
            "Newst",
            "Price: High - Low",
            "Price: Low - High",
            "Name: A - Z",
            "Name: Z - A",
          ]}
        />
      </div>
      {filterItem.length > 0 && (
        <div className="flex items-center mt-3">
          <div>Applied filters: </div>
          <div className="flex gap-2">
            {filterItem.map((item: string, index: number) => (
              <div
                className="border p-2 w-28 rounded-full flex justify-between items-center"
                key={index}
              >
                {item}
                <span
                  className="flex items-end w-1/4"
                  onClick={() => removeFilterItem(item)}
                >
                  <X />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortNavProduct;
