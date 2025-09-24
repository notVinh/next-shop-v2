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
import toast from "react-hot-toast";
import Link from "next/link";
import { userStore } from "@/lib/zustand/store";
import { clearCookies } from "@/services/queries/userQueries";

const UserAvatar = () => {
  const { clearUser, user } = userStore();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-16 h-16 cursor-pointer md:w-10 md:h-10 flex items-center justify-center">
          <AvatarImage
            alt="avatar"
            src={user?.image ? user?.image : "/icons/defaultavatar.png"}
            className="w-7 h-7"
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" alignOffset={-65}>
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
            if (user?.method === "default") {
              await clearCookies();
              clearUser();
              toast.success("Bạn đã đăng xuất thành công");
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
