import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";

type ItemData = {
  id: string;
  name: string;
  brand: string;
  price: string;
  amount: string;
  subimage: string[];
};

export function EditItem({ data }: { data: ItemData }) {
  const [formData, setFormData] = React.useState<ItemData>(data);
  const [currentImage, setCurrentImage] = React.useState<string>("");
  const [imageList, setImageList] = React.useState<string[]>(data.subimage);

  const editfield = ["id", "name", "brand", "price", "amount"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: typeof formData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[600px] overflow-y-scroll will-change-scroll">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-bold">Edit Product</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
          <Separator className="my-5" />
          <div className="grid gap-4 w-[700px]">
            {/* <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div> */}
            {/* <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div> */}
            {/* {Object.keys(data).map((key) => (
              <div className="grid gap-2 my-1" key={key}>
                <Label htmlFor={key} className="font-semibold">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <Input
                  id={key}
                  name={key}
                  defaultValue={data[key]}
                  placeholder={`Enter ${key}`}
                  onChange={handleInputChange}
                  className="bg-gray-100 text-gray-500"
                />
              </div>
            ))} */}
            {editfield.map((field) => (
              <div className="grid gap-2 mb-3" key={field}>
                <Label htmlFor={field} className="font-semibold uppercase">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  id={field}
                  name={field}
                  // defaultValue={data[field]}
                  placeholder={`Enter ${field}`}
                  onChange={handleInputChange}
                  className="bg-gray-100 text-gray-500 focus:outline-none focus-visible:ring-0"
                />
              </div>
            ))}
            <div className="flex flex-col gap-3 mb-3">
              <div className="flex gap-3">
                {imageList.map((href: string, index: number) => (
                  <div
                    key={href + index}
                    className="flex items-center justify-center gap-2 "
                  >
                    <Image src={href} alt="itemimage" height={50} width={50} />
                    {/* <Input
                      // id={field}
                      // name={field}
                      defaultValue={href}
                      // placeholder={`Enter ${field}`}
                      onChange={handleInputChange}
                      className="bg-gray-100 text-gray-500 focus:outline-none focus-visible:ring-0"
                    /> */}
                    <div className="absolute z-20">Vinh</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  name="image"
                  placeholder="Enter image link to add"
                  className="bg-gray-100 text-gray-500 focus:outline-none focus-visible:ring-0"
                  value={currentImage}
                  onChange={(e) => setCurrentImage(e.target.value)}
                />
                <Button
                  onClick={() => {
                    setImageList((prev) => [...prev, currentImage]);
                    setCurrentImage("");
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
