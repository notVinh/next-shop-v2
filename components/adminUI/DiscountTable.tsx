"use client";
import React from "react";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowUpDown, Copy, Eye, MoreHorizontal, Pen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Switch } from "../ui/switch";

export type Order = {
  name: string;
  code: string;
  exp: string;
  active: boolean;
  percent: number;
};

const data: Order[] = [
  {
    name: "Discount 2023",
    code: "DISCOUNT2023",
    exp: "2023-12-31",
    active: true,
    percent: 50,
  },
];

export const columns: ColumnDef<Order>[] = [
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
  // {
  //   accessorKey: "id",
  //   header: "ID",
  //   cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  // },

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
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => <div className="">{row.getValue("code")}</div>,
  },

  {
    accessorKey: "percent",
    header: "Percent",
    cell: ({ row }) => <div className="">{row.getValue("percent") + "%"}</div>,
  },

  {
    accessorKey: "exp",
    header: "Exp",
    cell: ({ row }) => <div className="">{row.getValue("exp")}</div>,
  },

  {
    accessorKey: "active",
    header: "Active",
    cell: () => <Switch id="airplane-mode" className="bg-green-400" />,
    enableHiding: false,
  },

  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

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
              onClick={() => navigator.clipboard.writeText(payment.code)}
            >
              Copy ID <Copy />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer flex justify-between">
              Edit
              <Pen />
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex justify-between">
              View details <Eye />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DiscountTable = () => {
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default DiscountTable;
