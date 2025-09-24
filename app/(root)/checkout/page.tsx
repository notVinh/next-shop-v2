import CheckoutDataForm from "@/components/CheckoutDataForm";
import CheckoutItem from "@/components/CheckoutItem";
import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-2xl p-6 mt-2">
      <div className="flex">
        <div className="w-1/2">
          <CheckoutDataForm />
        </div>
        <div className="w-1/2 border-l-2 px-12 flex flex-col justify-between">
          <CheckoutItem />
        </div>
      </div>
    </div>
  );
};

export default page;
