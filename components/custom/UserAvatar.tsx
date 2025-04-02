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
import { signOut } from "next-auth/react";
import useUser from "@/lib/zustand/useUser";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const UserAvatar = () => {
  const { clearUser, user } = useUser();

  // console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-16 h-16 cursor-pointer md:w-10 md:h-10">
          <AvatarImage
            alt="avatar"
            src={user?.avatar ? user?.avatar : "/icons/defaultavatar.png"}
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
            if (user?.loginMethod === "normal") {
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
