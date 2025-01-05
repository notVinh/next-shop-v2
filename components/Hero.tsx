import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative border-b-2 pb-10 md:pb-0">
      <Image
        className="object-cover h-[300px] w-full md:w-full md:h-[650px] p-2 rounded-2xl"
        src={"/images/splash2.jpg"}
        alt="splash"
        width={1900}
        height={500}
      ></Image>
      <div className="md:absolute top-10 md:left-10 md:right-auto right-10 flex-col flex text-yellow-600 text-3xl mt-5 md:mt-0 md:text-6xl items-center">
        We are digital <span>meets fashions</span>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-white text-sm md:text-xl px-5 w-36 py-2 rounded-lg hover:bg-yellow-600 hover:text-white shadow border">
            Shop now
          </button>
        </div>
      </div>
      <div className="absolute right-20 bottom-10 flex-col xl:flex md:text-white md:text-xl text-slate-700 hidden">
        Transfoming into fashion <span>& functional pieces</span>
      </div>
    </div>
  );
};

export default Hero;
