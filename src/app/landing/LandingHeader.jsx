import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { BuddyLogo } from "../assets/BuddyLogo";
import { FaAngleDown } from "react-icons/fa6";

function LandingHeader() {
  const username = "Mariano";
  return (
    <Navbar className="bg-T600" maxWidth="xl">
      <NavbarBrand className="grow-0 h-[100%] mr-8 py-2">
        <BuddyLogo/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 grow items-end pb-2">
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
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/activities"
            className="bg-P500"
            radius="sm"
          >
            Explora las actividades
          </Button>
        </NavbarItem>
        <NavbarItem>
          <div className="flex items-center gap-4">
            <Avatar />
            Hola {username}
            <FaAngleDown className="text-P200" />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default LandingHeader;