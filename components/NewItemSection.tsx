import React from "react";
import NewItemCard from "./NewItemCard";

const NewItemSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3 border-b-2">
      <div className="uppercase font-bold text-4xl underline">
        New Collection
      </div>
      <div className="text-center text-gray-500">
        Our latest collection where classic and contemporary styles convenege in{" "}
        <span>perfect harmony</span>
      </div>
      <div className="flex flex-row w-full p-2 justify-evenly mt-4 flex-wrap gap-10 md:gap-5">
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

export default NewItemSection;
