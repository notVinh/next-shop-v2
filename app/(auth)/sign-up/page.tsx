import SignUpForm from "@/components/custom/SignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <div className="h-full w-full pt-16 px-10 ">
      <div className="w-full text-4xl font-bold text-gray-500">
        Create an account
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
