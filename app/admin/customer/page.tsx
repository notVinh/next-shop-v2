import CustomerTable from "@/components/adminUI/CustomerTable";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex-1 ml-1">
      Customer list
      <CustomerTable />
    </div>
  );
};

export default page;
