import StaffTable from "@/components/adminUI/StaffTable";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex-1 ml-1">
      User list
      <StaffTable />
    </div>
  );
};

export default page;
