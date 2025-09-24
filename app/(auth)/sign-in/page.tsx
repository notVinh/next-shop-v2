import React from "react";
import { Separator } from "@/components/ui/separator";
import SignInForm from "@/components/custom/SignInForm";
import OauthNav from "@/components/OauthNav";

const SignIn = () => {
  return (
    <div className="h-full w-full pt-16 px-10 ">
      <div className="w-full text-4xl font-bold text-gray-500">Login</div>
      <SignInForm />
      <div className="mt-6">
        <div className="w-full text-xs text-center my-2">or login with</div>
        <Separator />
      </div>
      <OauthNav />
    </div>
  );
};

export default SignIn;
