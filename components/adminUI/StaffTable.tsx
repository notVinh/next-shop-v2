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

export type Order = {
  id: string;
  name?: string;
  email?: string;
  role?: "admin" | "user";
  lastLogin?: string;
  online?: boolean;
};

const data: Order[] = [
  {
    id: "3",
    name: "Quang Vinh",
    email: "dqv4work@gmail.com",
    online: true,
    role: "admin",
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "online",
    header: "Online",
    cell: ({ row }) => (
      <div
        className={`w-2 h-2  rounded-full ${
          row.getValue("online") ? "bg-green-400" : "border-2"
        }`}
      ></div>
    ),
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
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

const StaffTable = () => {
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default StaffTable;
