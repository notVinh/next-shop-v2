import { MoveUpRight } from "lucide-react";
import React from "react";

const colorClasses = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  // Thêm các màu khác nếu có
};

type ColorKey = keyof typeof colorClasses;

const OrderStat = ({
  color,
  title,
  amount,
  percent,
}: {
  color: ColorKey;
  title: string;
  amount: number;
  percent: number;
}) => {
  const selectedColor = colorClasses[color] || colorClasses.green;
  return (
    <div
      className={`flex flex-col ${selectedColor.bg} ${
        color ? `bg-${color}-200` : "bg-green-200"
      } py-5 px-5 w-1/3 rounded-lg`}
    >
      <div className="font-bold my-2">{title}</div>
      <div className="flex items-center gap-3">
        <span className={`font-black text-2xl ${selectedColor.text}`}>
          {amount}
        </span>{" "}
        <span className="text-2xl">|</span> Impression - {percent}%{" "}
        <div>
          <MoveUpRight className="text-green-400 w-5" />
        </div>
      </div>
    </div>
  );
};

export default OrderStat;
