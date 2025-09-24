"use client";
import { adminItemSidebar } from "@/constant/options";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightToLineIcon } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=" bg-white rounded-lg transition-transform duration-300 ">
      <div className="flex h-screen flex-col gap-2 p-3 ">
        {adminItemSidebar.map((item, index) => (
          <Link
            key={index}
            href={item?.url || "#"}
            className={`my-1 p-3 h-10 rounded-md cursor-pointer flex items-center gap-5 text-gray-600 font-semibold  ${
              pathname === item.url ? " bg-violet-500 text-white" : ""
            }`}
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt="sidebaricon"
            ></Image>
            {isOpen && <div className="w-32">{item.name}</div>}
          </Link>
        ))}
        <Button onClick={() => setIsOpen(!isOpen)}>
          <ArrowRightToLineIcon />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
