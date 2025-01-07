import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { wallImgList } from "@/lib/utils";
import Image from "next/image";

const CustomSlider = () => {
  return (
    <Carousel className="w-96 rounded-3xl m-3 overflow-hidden cursor-move">
      <CarouselContent>
        {wallImgList.map((item: string) => (
          <Image
            key={item}
            className=""
            src={`/images/${item}.jpg`}
            alt={item}
            width={400}
            height={400}
          ></Image>
        ))}
        {/* <CarouselItem>Vinh</CarouselItem>
        <CarouselItem>Hihi</CarouselItem>
        <CarouselItem>dadadadas</CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CustomSlider;
