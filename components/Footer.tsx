import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="rounded-xl bg-white w-full flex flex-col justify-between gap-3">
      <div className="mt-3 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40">
        <div className="w-1/3 flex flex-col justify-center items-center gap-5">
          <Image
            className="rounded-2xl"
            src={"/logo.png"}
            alt="pro"
            width={70}
            height={70}
          ></Image>
          <div className="flex flex-col gap-2 text-gray-500">
            <div>
              Get newletter update for upcoming product and{" "}
              <span>best discount for all item</span>
            </div>
            <div className="flex flex-row gap-3">
              <Input className="rounded-full w-60"></Input>
              <Button className="rounded-full">Submit</Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-row justify-between px-4">
          <div>
            <div className="font-bold text-lg mb-4">Product</div>
            <div className="text-sm font-bold text-gray-400 flex flex-col gap-1 items-center md:items-start">
              <div>T-shirt</div>
              <div>Jacket</div>
              <div>Shoes</div>
              <div>Pants</div>
              <div>Glasses</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg mb-4">Categories</div>
            <div className="text-sm font-bold text-gray-400 flex flex-col gap-1 items-center md:items-start">
              <div>Man</div>
              <div>Woman</div>
              <div>Kids</div>
              <div>Gift</div>
              <div>New Arrival</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg mb-4">Our Social Media</div>
            <div className="text-sm font-bold text-gray-400 flex flex-col gap-1 items-center md:items-start">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Youtube</div>
              <div>Tiktok</div>
              <div>X</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-gray-400 rounded-full h-8 items-center m-3 p-2">
        <div className="text-sm text-white">
          © 2025 |Nashiesobadly. All Rights Reserved.
        </div>
        <div className="flex flex-row gap-3 text-sm text-white">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
