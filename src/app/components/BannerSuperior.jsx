"use client";
import { BuddyLogo } from "../assets/BuddyLogo";
import { Avatar } from "@nextui-org/avatar";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
export default function BannerSuperior() {
  const user = useContext(UserContext);

  return (
    <div className="w-full h-24 rounded-3xl flex justify-between items-center px-8 mb-4 bg-T500">
      <BuddyLogo />
      <div className="rounded-full flex justify-between items-center pl-6 gap-4 bg-T600">
        <div className="text-light">{user.firstName + " " + user.lastName}</div>

        <div>
          <Avatar
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
