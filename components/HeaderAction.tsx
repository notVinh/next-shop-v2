import React, { useEffect } from "react";
import UserAvatar from "./custom/UserAvatar";
import { Button } from "./ui/button";
import useUser from "@/lib/zustand/useUser";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserAction from "./custom/UserAction";

const HeaderAction = () => {
  const { setUser, user } = useUser();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUser({
        name: session.user?.name || "",
        email: session.user?.email || "",
        avatar: session.user?.image || "",
        loginMethod: "OAuth",
      });
    }
  }, [session, setUser]);
  return (
    <div className="w-1/3 hidden md:flex justify-end items-center gap-5">
      <UserAction />
      {user ? (
        <UserAvatar />
      ) : (
        <Link href={"/sign-in"}>
          <Button variant={"outline"} className="font-semibold">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default HeaderAction;
