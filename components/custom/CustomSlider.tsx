"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CustomSlider = ({ data }: { data: string[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className=" h-[34rem] w-full overflow-hidden relative">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data.map((img, index) => (
            <CarouselItem key={index}>
              <div className="bg-black h-[35rem] overflow-hidden">
                <Image
                  src={img}
                  alt="1"
                  width={500}
                  height={500}
                  priority
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomSlider;
