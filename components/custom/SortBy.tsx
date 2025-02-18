import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const SortBy = ({ data }: { data: string[] }) => {
  const [isChoose, setIsChoose] = useState(data[0]);
  return (
    <div>
      SortBy:{" "}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="w-44 flex mx-2 border rounded-sm p-1">
            {isChoose}
            <span>
              <ChevronDown />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {data.map((item) => (
            <DropdownMenuItem
              key={item}
              onClick={() => setIsChoose(item)}
              className="hover:bg-gray-200"
            >
              {item}
            </DropdownMenuItem>
          ))}
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortBy;
