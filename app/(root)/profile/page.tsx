"use client";
import React, { useEffect } from "react";
// import useUser from "@/lib/zustand/useUser";
import axios from "axios";

const Profile = () => {
  // const { user } = useUser();
  //   console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      const resProfile = await axios.get("/api/user/profile");

      console.log(resProfile.data);
    };
    fetchData();
  }, []);

  return <div className="w-screen h-screen">Profile</div>;
};

export default Profile;
