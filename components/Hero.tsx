import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative border-b-2 md:border-b-0 m-2 pb-10 md:pb-5">
      <div className="h-[250px] md:w-full md:h-[650px] overflow-hidden rounded-2xl   ">
        <Image
          src={"/images/splash2.jpg"}
          alt="splash"
          width={1900}
          height={1650}
          priority
        ></Image>
      </div>
      <div className="md:absolute top-10 md:left-10 md:right-auto right-10 flex-col flex text-yellow-600 text-3xl mt-5 md:mt-0 md:text-6xl items-center">
        We are digital <span>meets fashions</span>
        <div className="flex justify-center items-center mt-4">
          <Link href={"/product"}>
            <Button className="bg-amber-600 hover:bg-white hover:text-amber-600">
              Shop now
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute right-20 bottom-10 flex-col xl:flex md:text-white md:text-xl text-slate-700 hidden">
        Transfoming into fashion <span>& functional pieces</span>
      </div>
    </div>
  );
};

export default Hero;
