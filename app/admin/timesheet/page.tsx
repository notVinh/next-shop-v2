import PostTable from "@/components/adminUI/PostTable";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex-1 ml-1">
      Post list
      <PostTable />
    </div>
  );
};

export default page;
