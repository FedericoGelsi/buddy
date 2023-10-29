import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import BuddyLogo from "../assets/Logo.png";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";


function LandingHeader() {
  const username = "Mariano";
  return (
    <Navbar className="bg-T600" maxWidth="xl">
      <NavbarBrand className="grow-0 mr-8">
        {/* <Image className="px-4" src={BuddyLogo} alt="NextUI hero Image" /> */}
        BUDDY LOGO
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 grow">
        <NavbarItem isActive>
          <Link color="P200" href="#" aria-current="page">
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
            <FaAngleDown/>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default LandingHeader;
