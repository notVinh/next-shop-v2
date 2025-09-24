"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { useState } from "react";

const ShippingOption = ({
  data,
  paymentType,
}: {
  data: [{ name: string; image: string }];
  paymentType: (value: string) => void;
}) => {
  const [isChoose, setIsChoose] = useState<string>(data[0].name);

  return (
    <RadioGroup
      defaultValue={data[0].name}
      onValueChange={(e) => {
        setIsChoose(e);
        paymentType(e);
        // console.log(typeof e);
      }}
      className="flex "
    >
      {data.map((item, index) => (
        <Label
          htmlFor={item.name}
          key={index}
          className={`flex items-center justify-start space-x-2 border w-48 p-3 rounded-lg gap-1 cursor-pointer ${
            isChoose === item.name ? "border-blue-500" : ""
          }`}
        >
          <RadioGroupItem
            value={item.name}
            id={item.name}
            className={`w-5 h-5 flex justify-center items-center  bg-white ${
              isChoose === item.name ? "border-blue-500" : ""
            } `}
            checked={isChoose === item.name}
          />
          <Image
            src={item.image}
            alt={item.name}
            width={20}
            height={20}
          ></Image>
          {item.name}
        </Label>
      ))}
    </RadioGroup>
  );
};

export default ShippingOption;
