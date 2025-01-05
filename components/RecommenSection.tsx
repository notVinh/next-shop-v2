import React from "react";
import RecommenItemCard from "./RecommenItemCard";

const RecommenSection = () => {
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
      <div className="uppercase font-bold text-4xl underline">New Trending</div>
      <div className="text-center text-gray-500">
        Alway update your style with <span>latest version</span>
      </div>
      <div className="flex flex-row w-full p-2 justify-evenly mt-4 flex-wrap gap-5 md:gap-0">
        <RecommenItemCard />
        <RecommenItemCard />
        <RecommenItemCard />
      </div>
    </section>
  );
};

export default RecommenSection;
