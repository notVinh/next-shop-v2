import React from "react";

const ButtonCircle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-10 h-10 flex justify-center items-center rounded-full shadow border-2 cursor-pointer">
      {children}
    </div>
  );
};

export default ButtonCircle;
