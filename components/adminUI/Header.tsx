"use client";
import Image from "next/image";
import React from "react";
import UserAvatar from "../custom/UserAvatar";
import { Bell, Calendar } from "lucide-react";
import { DatePick } from "./DatePick";

const Header = () => {
  return (
    <div className="flex justify-between items-center rounded-lg overflow-hidden bg-white ">
      <div className="w-56">
        <div className="flex justify-between p-3 bg-white rounded-lg">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={20}
            height={20}
            className=" cursor-pointer w-auto h-auto"
          />
        </div>
      </div>
      <div className="flex justify-between flex-1 h-full">
        <div className="bg-white flex justify-center px-2 items-center rounded-lg gap-1">
          <Calendar className="w-5 h-5" />
          <div className="font-semibold text-sm">October 19, 2025</div>
        </div>
        {/* <div className="flex bg-white rounded-lg justify-between items-center py-3">
          <div>
            <Search className="mx-3" />
          </div>
          <input
            className="bg-white w-72 h-full focus:outline-none focus:ring-0"
            placeholder="Search"
          />
        </div> */}
        <div className="flex items-center gap-2 rounded-lg bg-white px-3">
          {/* <div className="flex rounded-md border p-2">
            <div className="border-r">Sep 11 - Oct 10</div>
            <div>Monthly</div>
          </div> */}
          <DatePick />
          {/* <div className="border p-1.5 rounded-md">Filter</div> */}
          <div className="border p-1.5 rounded-md">Import</div>
          <div className="border p-1.5 rounded-md">Export</div>
        </div>
      </div>
      <Bell />
      <div className="border rounded-full mx-3">
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
