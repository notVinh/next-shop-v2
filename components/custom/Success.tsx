"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// interface SuccessProps {
//   action?: () => void;
// }

const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 text-gray-600">
      <Image src={"/images/check.png"} alt="success" width={150} height={150} />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-semibold">Thank you for ordering!</h1>
        <p>We are honored that we are your choice.</p>
      </div>
      <div className="flex flex-row gap-2">
        {/* <Button
          variant="outline"
          className="uppercase border-2 border-gray-400"
          onClick={() => action()}
        >
          View Order
        </Button> */}
        <Button
          asChild
          variant="outline"
          className="uppercase border-2 border-gray-400"
        >
          <Link href={"/product"}>Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
