"use client";
import Image from "next/image";
import React, { memo, useEffect } from "react";
import { Heart, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
import SubNavMenu from "./SubNavMenu";
// import { Button } from "./ui/button";
// import { auth } from "@/auth";
import ButtonCircle from "./custom/ButtonCircle";
// import UserAvatar from "./custom/UserAvatar";
import useUser from "@/lib/zustand/useUser";
import UserAvatar from "./custom/UserAvatar";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import useUser from "@/lib/zustand/useUser";

const Navbar = () => {
  const { setUser, user } = useUser();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUser({
        name: session.user?.name || "",
        email: session.user?.email || "",
        avatar: session.user?.image || "",
        loginMethod: "OAuth",
      });
    }
  }, [session, setUser]);

  // console.log(user);

  return (
    <div className="flex w-full rounded-xl h-16 shadow justify-between items-center text-xs font-semibold text-gray-600 p-6  bg-white">
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
      <div className="w-1/3 hidden md:flex justify-end items-center gap-5">
        <ButtonCircle>
          <Search className="w-5 h-5" />
        </ButtonCircle>
        <ButtonCircle>
          <Heart className="w-5 h-5" />
        </ButtonCircle>
        <ButtonCircle>
          <ShoppingBag className="w-5 h-5" />
        </ButtonCircle>
        {user ? (
          <UserAvatar data={user} />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant={"outline"}>Đăng nhập</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default memo(Navbar);
