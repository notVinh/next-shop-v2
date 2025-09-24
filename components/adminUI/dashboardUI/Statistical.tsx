import React from "react";
import { ChartNav } from "./ChartNav";
import { Income } from "./Income";
import { TrendingItem } from "./TrendingItem";
import { StatusOrder } from "./StatusOder";

const Statistical = () => {
  return (
    <div className="w-full flex-col">
      <div className="w-full flex gap-2">
        <div className="flex w-2/3 gap-2">
          <div className="w-1/3">
            <ChartNav datakey="order" label="Total Order" />
          </div>
          <div className="w-1/3">
            <ChartNav datakey="product" label="Total Product" />
          </div>
          <div className="w-1/3">
            <ChartNav datakey="user" label="Total User" />
          </div>
        </div>
        <div className="w-1/3">
          <TrendingItem />
        </div>
      </div>
      <div className="w-full flex gap-2 mt-2">
        <div className="w-2/3">
          <Income />
        </div>
        <div className="w-1/3">
          <StatusOrder />
        </div>
      </div>
    </div>
  );
};

export default Statistical;
