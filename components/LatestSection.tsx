import React from "react";
import NewItemCard from "./custom/NewItemCard";
import HeaderSection from "./custom/HeaderSection";

const LatestSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3 border-b-2">
      <HeaderSection
        title="New Collection"
        desc="Our latest collection where classic and contemporary styles convenege
          in perfect harmony"
      />

      <div className="flex flex-row w-full p-2 justify-evenly mt-4 md:flex-wrap gap-2 md:gap-5 overflow-scroll md:overflow-auto">
        <NewItemCard />
        <NewItemCard />
        <NewItemCard />
        <NewItemCard />
        <NewItemCard />
        <NewItemCard />
      </div>
    </section>
  );
};

export default LatestSection;
