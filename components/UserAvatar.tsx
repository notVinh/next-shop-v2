import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className="w-10 h-10 cursor-pointer">
      <AvatarImage src="/images/demoavatar.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
