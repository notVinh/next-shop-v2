"use client";
import React from "react";
import { Search, X } from "lucide-react";
import SortBy from "@/components/custom/SortBy";
import useSortStore from "@/lib/zustand/sortStore";
import { motion } from "framer-motion";

const SortNavProduct = () => {
  const { filterItem, removeFilterItem } = useSortStore();

  return (
    <div className="min-h-10 w-full bg-white rounded-xl md:mb-1 p-5 transition-transform duration-300 hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className="rounded-full border p-2 flex">
            <input type="text" className="outline-none" />
            <Search className="rounded-full" />
          </div>
          <div>9 result</div>
        </div>
        <div className="w-1/4">
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
      </div>
      {filterItem.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và trượt từ trên
          animate={{ opacity: 1, y: 0 }} // Xuất hiện mượt mà
          exit={{ opacity: 0, y: 50 }} // Khi rời đi, trượt xuống
          transition={{ duration: 0.5 }} // Thời gian chuyển động
          className="flex items-center mt-3"
        >
          Applied filters:{" "}
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
        </motion.div>
      )}
    </div>
  );
};

export default SortNavProduct;
