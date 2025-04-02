import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div>
      <div>Checkout</div>
      <div>
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" id="email" />
      </div>
    </div>
  );
};

export default page;
