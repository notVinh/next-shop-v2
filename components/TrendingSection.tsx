import React from "react";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3">
      <div className="uppercase font-bold text-4xl underline">Trending</div>
      <div className="text-center text-gray-500">
        Our latest collection where classic and contemporary styles convenege in
        <span>perfect harmony</span>
      </div>
      <div className="flex flex-row w-full p-2 justify-evenly mt-4 flex-wrap gap-5 md:gap-0">
        <TrendingCard />
        <TrendingCard />
      </div>
    </section>
  );
};

export default TrendingSection;
