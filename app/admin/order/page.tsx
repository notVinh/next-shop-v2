import OrderTable from "@/components/adminUI/OrderTable";
import OrderStat from "@/components/custom/OrderStat";
import React from "react";

const page = () => {
  return (
    <div className="ml-1 px-3 bg-white w-full h-full rounded-lg min-h-screen">
      <div className="font-semibold text-2xl my-5">Orders</div>
      <div className="flex justify-start gap-5 my-5">
        <OrderStat title="New Orders" color="blue" amount={245} percent={10} />
        <OrderStat
          title="Pending Orders"
          color="violet"
          amount={123}
          percent={20}
        />
        <OrderStat
          title="New Orders"
          color="orange"
          amount={245}
          percent={10}
        />
      </div>
      <OrderTable />
    </div>
  );
};

export default page;
