"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import SignInForm from "@/components/custom/SignInForm";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SignIn = () => {
  return (
    <div className="h-full w-full pt-16 px-10 ">
      <div className="w-full text-4xl font-bold text-gray-500">Login</div>
      <SignInForm />
      <div className="mt-6">
        {/* <Separator  /> */}

        <div className="w-full text-xs text-center my-2">or login with</div>
        <Separator />
      </div>
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
    </div>
  );
};

export default SignIn;
