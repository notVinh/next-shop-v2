"use client";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
import SubNavMenu from "./SubNavMenu";
import HeaderAction from "./HeaderAction";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(user);

  // bg-white shadow-md
  return (
    <motion.div
      initial={{ y: 5, opacity: 1, scale: 0.99 }}
      animate={
        isScrolled
          ? { y: 0, opacity: 1, scale: 1 }
          : { y: 5, opacity: 1, scale: 0.99 }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed w-full h-16 shadow  flex justify-evenly items-center p-6  bg-white top-0 left-0 right-0 z-50 ${
        isScrolled ? "rounded-none" : "rounded-xl"
      }`}
      // className={`flex w-full h-16 shadow justify-between items-center text-xs font-semibold text-gray-600 p-6  bg-white transition-transform duration-300 top-0 left-0 right-0 z-50 ${
      //   isScrolled
      //     ? "transform -translate-x-0 fixed rounded-none"
      //     : "transform rounded-xl "
      // }`}
    >
      <div className="w-1/3 hidden md:flex gap-10  ">
        <NavMenu />
      </div>
      <div className="w-1/2 flex md:hidden">
        <SubNavMenu />
      </div>
      <div className="w-1/2 md:w-1/3 flex justify-end md:justify-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
            className=" cursor-pointer w-auto h-auto"
          />
        </Link>
      </div>
      <HeaderAction />
    </motion.div>
  );
};

export default memo(Header);
