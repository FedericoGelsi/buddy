"use client";

import React from "react";
import BannerSuperior from "../components/BannerSuperior";
import { Button } from "@nextui-org/button";
import { FaAngleLeft } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import ActivitiesList from "../components/ActivitiesList";
import { useRouter } from "next/navigation";

function ActivitiesHome() {
  const router = useRouter();

  return (
    <div className="container flex-col">
      <BannerSuperior />
      <Button variant="light" startContent={<FaAngleLeft />} size="lg">
        Atras
      </Button>
      <div className="mx-4">
        <h2 className="my-4 text-4xl font-medium">
          Te damos la bienvenida a Buddy
        </h2>
        <h2 className="my-4 text-md font-light">
          Controla el progreso y realiza las actividades de protección juntos.{" "}
        </h2>
        <Tabs
          key="underlined"
          variant="underlined"
          aria-label="Options"
          color="success"
        >
          <Tab key="activities" title="Actividades">
            <ActivitiesList router={router} />
          </Tab>
          <Tab key="dashboard" title="Progreso"></Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ActivitiesHome;
