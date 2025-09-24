"use client";
import { ProductPropTypes } from "@/constant/type";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductCard = ({ data }: { data: ProductPropTypes }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-64 h-64 overflow-hidden rounded-lg shadow ">
        <Link href={`/product/${data?.id}`}>
          <Image
            src={data?.image || "/images/default-product.png"}
            alt="product"
            width={350}
            height={350}
            className="hover:scale-110 transition-all cursor-pointer "
          ></Image>
        </Link>
      </div>
      <div>{data.name}</div>
      <div>{data.price}</div>
    </motion.div>
  );
};

export default ProductCard;
