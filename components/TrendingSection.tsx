import React from "react";
import TrendingCard from "./custom/TrendingCard";
import HeaderSection from "./custom/HeaderSection";

const TrendingSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3 border-b-2">
      <div className="overflow-hidden rounded-lg mx-2 mb-10 ">
        <video
          src="https://res.cloudinary.com/dshvydi5f/video/upload/v1709050189/vShop/videos/showcase_nndtm4.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <HeaderSection
        title="New Trending"
        desc="Alway update your style with latest version"
      />

      <div className="flex flex-row w-full p-2 justify-evenly mt-4 md:flex-wrap gap-2 md:gap-0 overflow-scroll md:overflow-auto">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </section>
  );
};

export default TrendingSection;
