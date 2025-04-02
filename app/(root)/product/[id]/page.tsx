// "use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
// import axios from "axios";
import { CheckCircle2, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

// const fetchProducts = async () => {
//   const response = await axios.get(`http://localhost:3000/api/product`);
//   return response.data;
// };

// export async function generateStaticParams() {
//   const products = await fetchProducts();

//   return products.map((product: { id: number }) => ({
//     id: String(product.id),
//   }));
// }
const ProductDetail = () => {
  // const products = await fetchProducts();
  // const product = products.find(
  //   (product: { id: number }) => String(product.id) === params.id
  // );

  // async function fetchStreamingData() {
  //   const response = await fetch("http://localhost:5000/api/v1/ai");
  //   const reader = response?.body?.getReader();
  //   const decoder = new TextDecoder();

  //   while (true) {
  //     const { done, value } = await reader?.read();
  //     if (done) break;

  //     console.log(decoder.decode(value)); // Hiển thị từng phần kết quả
  //   }
  // }

  // fetchStreamingData();

  return (
    <div className=" bg-white rounded-xl w-full my-2 p-3">
      <div className="  justify-between flex">
        <div className="flex justify-center w-3/5 gap-4 ">
          <div className="flex-col flex gap-3">
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
            <Image
              src="/images/airmax.png"
              alt="footerbanner"
              width={50}
              height={50}
              className="w-20 h-20 rounded-lg"
            ></Image>{" "}
          </div>
          <div className="w-[600px] h-96 rounded-2xl">
            <Image
              src="/images/airmax.png"
              alt="productimg"
              className="w-auto h-auto rounded-lg"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
        <div className="w-2/5 flex-col flex gap-5">
          <div className="text-2xl font-bold">
            <div className="text-gray-500 text-sm font-semibold">
              Brand: Nike / ID: 5489135
            </div>
            VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE
          </div>
          <div className="flex">
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="ml-3"> 21 reviews</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-xl font-semibold">16$</div>
            <div className="text-xl font-semibold line-through text-gray-400">
              16$
            </div>
            <Button className="rounded-full h-8">20%</Button>
          </div>
          <p className="text-gray-600">
            Decriptioon: Từ đấy, có lẽ chúng ta không cần nói nhiều về độ hot
            của VANS SLIP-ON CHECKERBOARD trong những năm gần đây, khi mà nó
            được nhiều ngôi sao nổi tiếng và quan trọng là được rất nhiều bạn
            trẻ trên toàn thế giới ủng hộ. Nổi tiếng từ khi được SEAN PENN mang
            trong bộ phim FAST TIMES năm 1982, đôi giày này đã mang đến một luồn
            gió mới cho thời trang, đó là thiết kế SLIP-ON trứ danh cùng hoạ
            tiết ô caro checkerboard kinh điển
          </p>
          <div className="flex gap-3 items-center">
            Size
            <Button className="rounded-full">50ml</Button>
            <Button className="rounded-full">50ml</Button>
            <Button className="rounded-full">50ml</Button>
            <Button className="rounded-full">50ml</Button>
            <Button className="rounded-full">50ml</Button>
          </div>
          <div className="flex gap-3 items-center">
            Color
            <Button className="w-8 h-8">red</Button>
            <Button className="w-8 h-8">red</Button>
            <Button className="w-8 h-8">red</Button>
            <Button className="w-8 h-8">red</Button>
            <Button className="w-8 h-8">red</Button>
          </div>
          <div className="flex-col flex gap-3">
            Amount
            <div className="flex gap-2">
              <div className="flex items-center rounded-full border w-32 justify-around h-10 ">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>

              <Button className="rounded-full h-10 flex-1">Add to cart</Button>
              <Button className="rounded-full w-10 h-10">
                <Heart />
              </Button>
            </div>
            <div>
              <Button className="rounded-full w-full">Buy now</Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>Ships for free the week of June 16th. </div>
          </div>
          <div>Prople</div>
          <div>Deep detail</div>
        </div>
      </div>
      <Separator />
      <div className="mx-12">
        <div className="text-4xl my-10">Customer Review</div>
        <div className="flex ">
          <div className="w-2/3 flex flex-col gap-6 justify-start">
            <div className="flex items-start justify-start ">
              <div>
                <span className="text-4xl">4.9</span>
                /5
              </div>
              <div className="ml-3">
                <div className="flex items-center ">
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                </div>
                <div className="text-sm">Based on 21 reviews</div>
              </div>
            </div>
            <Separator className="w-96" />
            <div className="">
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <div>Search</div>
              <div>Most relevant</div>
              <div>All rating</div>
              <div>With media</div>
            </div>
            <Separator className="mb-4" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                </div>
                <div>today</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-lg"> Nashy</span>
                <div className="flex justify-center items-center">
                  <CheckCircle2 className="w-4 h-4" />{" "}
                  <span className="text-sm">Verify user</span>
                </div>
              </div>
              <p>
                More Air, less bulk. The Dn8 takes our Dynamic Air system and
                condenses it into a sleek, low-profile package. Powered by eight
                pressurised Air tubes, it gives you a responsive sensation with
                every step. Enter an unreal experience of movement.
              </p>
              <div>
                <Image
                  src="/images/airmax.png"
                  alt="footerbanner"
                  width={50}
                  height={50}
                  className="w-20 h-20 rounded-lg"
                ></Image>
              </div>
              <div className="flex text-gray-500">
                Was this review helpful?
                <div>ok</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
