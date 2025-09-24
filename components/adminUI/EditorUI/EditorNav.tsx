import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TipTap from "./TipTap";
import { Pen } from "lucide-react";

export function EditorNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button className="border-none bg-white text-black">Editor</Button> */}
        <div className="px-2 py-1 flex justify-between items-center hover:bg-gray-100 rounded-sm cursor-pointer font-normal">
          Edit <Pen className="w-4 h-4" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]  ">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Let&#39;s create trending posts. Click save when you done.
          </DialogDescription>
        </DialogHeader>
        <TipTap content={"Enter text here"} />

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
