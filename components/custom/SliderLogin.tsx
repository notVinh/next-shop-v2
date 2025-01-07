"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const SliderLogin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className=" h-[34rem] w-full mx-2 rounded-xl overflow-hidden relative">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="bg-black w-full h-[35rem] overflow-hidden">
              <Image
                src={"/images/wall1.jpg"}
                alt="1"
                width={500}
                height={500}
                priority
              ></Image>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-black w-full h-[35rem] overflow-hidden">
              <Image
                src={"/images/wall2.jpg"}
                alt="1"
                width={500}
                height={500}
                priority
              ></Image>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-black w-full h-[35rem] overflow-hidden">
              <Image
                src={"/images/wall3.jpg"}
                alt="1"
                width={500}
                height={500}
                priority
              ></Image>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="absolute top-0 right-0">
        <Link href="/">
          <Button
            variant={"outline"}
            className="rounded-full bg-transparent text-white m-2"
          >
            Back to website
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SliderLogin;
