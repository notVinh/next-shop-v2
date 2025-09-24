import DiscountTable from "@/components/adminUI/DiscountTable";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex-1 ml-1">
      Discount list
      <DiscountTable />
    </div>
  );
};

export default page;
