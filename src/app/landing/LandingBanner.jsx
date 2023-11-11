"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BannerImg from "../assets/landing/banner.jpeg";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { UserContext } from "../contexts/UserContext";

const LandingBanner = () => {
  const user = useContext(UserContext);

  return (
    <div className="grid grid-cols-7">
      <div className="col-span-3">
        <Image src={BannerImg} alt="Banner img" />
      </div>
      <div className="col-span-4 bg-T500">
        <Content userid={user._id} />
      </div>
    </div>
  );
};

export default LandingBanner;

const Content = ({ userid }) => {
  return (
    <div className="h-full flex flex-col justify-center mx-8 gap-8">
      <h4 className="uppercase text-S300 text">Niveles educativos</h4>
      <h1 className="text-[2.5rem] font-bold">
        Jugando para aprender con <br />
        <span className="text-S300">
          nuestra herramienta educativa contra el grooming
        </span>
      </h1>
      <p className="text-xl">
        Nuestro pack de 3 niveles de juegos y cuestionarios está diseñado para
        educar a tus hijos y a ti sobre el grooming en línea. Diviértete
        mientras aprendes y fortaleces la seguridad en línea de tu familia.
      </p>
      <div className="flex gap-4">
        <Button
          as={Link}
          color="primary"
          radius="sm"
          size="lg"
          href={`${userid}/activities`}
        >
          Explora las actividades
        </Button>
      </div>
    </div>
  );
};
