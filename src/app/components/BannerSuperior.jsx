"use client";

import { useEffect, useState } from "react";
import { getInfo } from "../fetchApi.js";
import Image from "next/image";
import BuddyLogo from "../assets/Logo.png";
import { Avatar } from "@nextui-org/avatar";

export default function BannerSuperior() {
  const [nombre, setNombre] = useState("username");
  useEffect(() => {
    getInfo(setNombre);
  }, []);

  return (
    <div
      className="w-full h-24 rounded-3xl flex justify-between items-center px-8 mb-4"
      style={{ backgroundColor: "#2A4B62" }}
    >
      <Image src={BuddyLogo} alt="NextUI hero Image" />
      <div
        className="rounded-full flex justify-between items-center pl-6 gap-4"
        style={{ backgroundColor: "#1E3646" }}
      >
        <div className="text-light">{nombre}</div>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="lg"
        />
      </div>
    </div>
  );
}
