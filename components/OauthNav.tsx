"use client";
import React from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OauthNav = () => {
  return (
    <div className="flex w-full gap-3 mt-5">
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => {
          signIn("github", { redirectTo: "/" });
          toast.success("Bạn đang đăng nhập bằng github");
        }}
      >
        <Image
          src={"/icons/github.png"}
          alt="githubicon"
          height={20}
          width={20}
        ></Image>
      </Button>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => {
          signIn("google", { redirectTo: "/" });
          toast.success("Bạn đang đăng nhập bằng google");
        }}
      >
        <Image
          src={"/icons/google.png"}
          alt="googleicon"
          height={20}
          width={20}
        ></Image>
      </Button>
    </div>
  );
};

export default OauthNav;
