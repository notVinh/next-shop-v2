import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserPropTypes } from "@/constant/type";
import { signOut } from "next-auth/react";
import useUser from "@/lib/zustand/useUser";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const UserAvatar = ({ data }: { data?: UserPropTypes }) => {
  const { clearUser } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage
            alt="avatar"
            src={data?.avatar ? data?.avatar : "/icons/defaultavatar.png"}
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem
          onClick={async () => {
            clearUser();
            if (data?.loginMethod === "normal") {
              await axios.post("/api/user/logout");
              // console.log("dang xuat ne");
            } else {
              signOut();
            }
            toast.success("Bạn đã đăng xuất thành công");
          }}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
