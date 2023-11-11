import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { BuddyLogo } from "../assets/BuddyLogo";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const LandingFooter = () => {
  return (
    <footer className="w-full h-44">
      <Navbar className="bg-T600 h-full" maxWidth="xl">
        <NavbarBrand className="h-full my-4 flex flex-col items-start gap-4 justify-center">
          <div className="grow">
            <BuddyLogo />
          </div>
          <p className="font-light">Tu compañero en la prevención.</p>
        </NavbarBrand>
        <div className="flex flex-col gap-4 items-end">
          <NavbarContent
            className="hidden sm:flex gap-4 grow items-end pb-2"
            justify="end"
          >
            <NavbarItem isActive>
              <Link className="text-P200" href="#" aria-current="page">
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                Grooming
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Planes
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contacto
              </Link>
            </NavbarItem>
          </NavbarContent>
          <div className="flex gap-4">
            <FaFacebook className="text-P200 text-2xl" />
            <FaInstagram className="text-P200 text-2xl" />
            <FaTwitter className="text-P200 text-2xl" />
          </div>
          <p className="font-thin">© Copyright 2009 Buddy</p>
        </div>
      </Navbar>
    </footer>
  );
};

export default LandingFooter;
