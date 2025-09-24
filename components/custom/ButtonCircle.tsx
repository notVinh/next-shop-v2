import React from "react";

const ButtonCircle = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <div
      className="w-10 h-10 flex justify-center items-center rounded-full shadow border-2 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default ButtonCircle;
