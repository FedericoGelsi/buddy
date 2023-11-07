import React from "react";
import Image from "next/image";
import HeroImg from "../assets/landing/hero.jpeg";
import { Button } from "@nextui-org/button";
const LandingHero = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 bg-T500">
        <Content />
      </div>
      <div className="col-span-2">
        <Image src={HeroImg} />
      </div>
    </div>
  );
};

export default LandingHero;

const Content = (props) => {
  return (
    <div className="h-full flex flex-col justify-center mx-8 gap-8">
      <h1 className="text-[3rem] font-bold">
        Protegiendo a nuestros <br />
        <span className="text-S300">pequeños en línea</span>
      </h1>
      <p className="text-xl">
        Descubre cómo mantener a tus hijos seguros en el mundo digital. Nuestro
        pack de juegos educativos es la herramienta perfecta para enseñar sobre
        el grooming.
      </p>
      <div className="flex gap-4">
        <Button
          className="light text-light hover:text-black"
          size="lg"
          variant="ghost"
          radius="sm"
        >
          Contacto
        </Button>
        <Button color="primary" radius="sm" size="lg">
          Explora las actividades
        </Button>
      </div>
    </div>
  );
};
