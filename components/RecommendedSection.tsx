import React from "react";
import RecommendedCard from "./custom/RecommendedCard";
import HeaderSection from "./custom/HeaderSection";

const RecommendedSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3">
      <HeaderSection
        title="Recommended"
        desc="Our latest collection where classic and contemporary styles convenege inperfect harmony"
      />
      <div className="flex flex-row w-full p-2 justify-evenly mt-4 md:flex-wrap gap-5 md:gap-0">
        <RecommendedCard />
        <RecommendedCard />
      </div>
    </section>
  );
};

export default RecommendedSection;
