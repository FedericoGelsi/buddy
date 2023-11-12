"use client";
import React, { useContext } from "react";
import { BuddyLogo } from "../../assets/BuddyLogo";
import AvatarSvg from "../../assets/AvatarSvg";
import { UserContext } from "../../contexts/UserContext";
export default function BannerSuperior() {
  const user = useContext(UserContext);
  return (
    <div className="w-full h-24 rounded-3xl flex justify-between items-center px-8 mb-4 bg-T500">
      <BuddyLogo />
      <div className="rounded-full flex justify-between items-center pl-6 gap-4 bg-T600">
        <div className="text-light">{user.firstName + " " + user.lastName}</div>
        <div className="w-[3rem]">
          <AvatarSvg />
        </div>
      </div>
    </div>
  );
}
