import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import useSortProduct from "@/lib/zustand/useSortProduct";

const FilterSelect = ({
  title,
  catItem,
}: {
  title: string;
  catItem: string[];
}) => {
  const { filterItem, addFilterItem, removeFilterItem } = useSortProduct();

  const [isOpen, setIsOpen] = React.useState(false);

  console.log(filterItem);
  return (
    <div className="space-x-4">
      <Collapsible>
        <CollapsibleTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="w-full"
        >
          <div className="flex justify-between hover:bg-gray-200 w-full rounded-lg p-2 my-1">
            <div>{title}</div> {isOpen ? <ChevronDown /> : <ChevronRight />}
          </div>
        </CollapsibleTrigger>
        {catItem.map((item) => (
          <CollapsibleContent key={item}>
            <div className="flex pl-5 my-2 gap-2">
              <input
                type="checkbox"
                checked={filterItem.includes(item)}
                onChange={() => {
                  if (filterItem.includes(item)) {
                    removeFilterItem(item);
                  } else {
                    addFilterItem(item);
                  }
                }}
              />
              {item}
            </div>
          </CollapsibleContent>
        ))}
      </Collapsible>
    </div>
  );
};

export default FilterSelect;
