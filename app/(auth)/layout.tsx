import React from "react";
import { Toaster } from "react-hot-toast";
import SliderLogin from "@/components/custom/SliderLogin";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-opacity-10 min-h-screen flex justify-center items-center">
      <div className="w-[60rem] h-[35rem] bg-white relative rounded-xl flex flex-row">
        <div className=" w-1/2 h-full flex justify-center items-center">
          <SliderLogin />
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center">
          <div className="m-3 w-full h-full">{children}</div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default AuthLayout;
