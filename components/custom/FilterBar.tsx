import React from "react";
import FilterSelect from "./FilterSelect";
import { Separator } from "../ui/separator";

const FilterBar = () => {
  return (
    <div className="w-full bg-white rounded-xl md:h-full">
      <FilterSelect title="Catelogy" catItem={["Man", "Women", "Kid"]} />
      <Separator />
      <FilterSelect title="Catelogy" catItem={["Man", "Women", "Kid"]} />
      <Separator />
    </div>
  );
};

export default FilterBar;
