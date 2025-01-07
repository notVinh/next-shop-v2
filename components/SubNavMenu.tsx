import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ButtonCircle from "./custom/ButtonCircle";
import { Menu } from "lucide-react";
import UserAvatar from "./custom/UserAvatar";
import UserAction from "./custom/UserAction";
import AccNavMenu from "./AccNavMenu";

const SubNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ButtonCircle>
          <Menu />
        </ButtonCircle>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <>
          <div>
            <div className="flex justify-center m-5">
              <UserAvatar />
            </div>
            <div className="flex w-full justify-center gap-10">
              <UserAction />
            </div>
            <div>
              <AccNavMenu />
            </div>
          </div>
        </>
      </SheetContent>
    </Sheet>
  );
};

export default SubNavMenu;
