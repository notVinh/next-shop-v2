"use client";
import React from "react";
import UserAvatar from "./custom/UserAvatar";
import { Button } from "./ui/button";
import Link from "next/link";
import UserAction from "./custom/UserAction";
import { userStore } from "@/lib/zustand/store";
import ButtonCircle from "./custom/ButtonCircle";

const HeaderAction = () => {
  const { user } = userStore();
  return (
    <div className="w-1/3 hidden md:flex justify-end items-center gap-5">
      <UserAction />
      {user ? (
        <ButtonCircle>
          <UserAvatar />
        </ButtonCircle>
      ) : (
        <Link href={"/sign-in"}>
          <Button variant={"outline"} className="font-semibold">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default HeaderAction;
