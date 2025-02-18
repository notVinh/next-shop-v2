import React from "react";
import FilterSelect from "./custom/FilterSelect";
import { Separator } from "./ui/separator";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-white rounded-xl h-screen p-3">
      <FilterSelect title="Catelogy" catItem={["Man", "Women", "Kid"]} />
      <Separator />
      <FilterSelect title="Catelogy" catItem={["Man", "Women", "Kid"]} />
      <Separator />
    </div>
  );
};

export default SideBar;
