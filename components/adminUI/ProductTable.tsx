import React from "react";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowUpDown, Copy, Eye, MoreHorizontal } from "lucide-react";
import { Switch } from "../ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import {
  changeActiveProduct,
  getAllProducts,
} from "@/services/queries/productQueries";

export type ProductColType = {
  id: string;
  name: string;
  amount: number;
  price: number;
  status: "sold out" | "out of stock" | "in stock";
  active?: boolean;
  instock?: boolean;
};

export const columns: ColumnDef<ProductColType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  //   {
  //     accessorKey: "name",
  //     header: "Name",
  //     cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  //   },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left"
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase ml-4">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="capitalize ml-5">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  // {
  //   accessorKey: "instock",
  //   header: "In stock",
  //   cell: ({ row }) => (
  //     <div className="capitalize">{row.getValue("instock")}</div>
  //   ),
  // },

  {
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) => (
      <Switch
        defaultChecked={row.getValue("active")}
        id="airplane-mode"
        className="bg-green-400"
        onCheckedChange={() => changeActiveProduct(row.getValue("id"))}
      />
    ),
    enableHiding: false,
  },

  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer flex justify-between"
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy ID <Copy />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem className="cursor-pointer flex justify-between">
              Edit
              <Pen />
            </DropdownMenuItem> */}
            <Link href={`/admin/product/${product.id}`}>
              <DropdownMenuItem className="cursor-pointer flex justify-between">
                View details <Eye />
              </DropdownMenuItem>
            </Link>
            {/* <EditorNav /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const ProductTable = async () => {
  const { data } = await getAllProducts();

  // const data: Order[] = [
  //   {
  //     id: "3",
  //     name: "Luka 3 PF",
  //     amount: 10,
  //     price: 3089000,
  //     status: "in stock",
  //   },
  //   {
  //     id: "4",
  //     name: "Luka 4 PF",
  //     amount: 10,
  //     price: 3089000,
  //     status: "in stock",
  //   },
  // ];
  return (
    <div>
      {data?.length > 0 ? (
        <DataTable data={data} columns={columns} />
      ) : (
        <Image src="/icons/loading.svg" alt="loading" width={30} height={30} />
      )}
    </div>
  );
};

export default ProductTable;
