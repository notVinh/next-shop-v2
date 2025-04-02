import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import FilterBar from "./custom/FilterBar";
import SortBy from "./custom/SortBy";

const FilterDrawler = () => {
  return (
    <div className="block md:hidden">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Sort for your option</DrawerTitle>
            <DrawerDescription>please choose</DrawerDescription>
          </DrawerHeader>
          <div className="mx-5">
            <SortBy
              data={[
                "Newst",
                "Price: High - Low",
                "Price: Low - High",
                "Name: A - Z",
                "Name: Z - A",
              ]}
            />
          </div>
          <FilterBar />
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FilterDrawler;
