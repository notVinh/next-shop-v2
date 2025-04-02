import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccNavMenu = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Product</AccordionTrigger>
          <AccordionContent>
            <>
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Youtube</div>
              <div>Tiktok</div>
              <div>X</div>
            </>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Product</AccordionTrigger>
          <AccordionContent>
            <>
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Youtube</div>
              <div>Tiktok</div>
              <div>X</div>
            </>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Product</AccordionTrigger>
          <AccordionContent>
            <>
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Youtube</div>
              <div>Tiktok</div>
              <div>X</div>
            </>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col md:flex-row justify-between bg-gray-600 rounded-full h-8 items-center m-3 p-2 self-end">
        <div className="text-sm text-white">
          © 2025 |Nashiesobadly. All Rights Reserved.
        </div>
        <div className="flex flex-row gap-3 text-sm text-white">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </>
  );
};

export default AccNavMenu;
