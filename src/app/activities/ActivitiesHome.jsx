"use client";

import React from "react";
import BannerSuperior from "../components/BannerSuperior";
import { Button } from "@nextui-org/button";
import { FaAngleLeft } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import ActivitiesList from "../components/ActivitiesList";
import ProgressBox from "../progress/ProgressBox";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/link";

function ActivitiesHome() {
  const router = useRouter();

  return (
    <div className="container flex-col">
      <BannerSuperior />
      <div className="mx-4">
        <Button
          as={Link}
          href="/"
          variant="light"
          startContent={<FaAngleLeft />}
          size="lg"
          className="T100 my-2"
        >
          Atras
        </Button>
        <div>
          <h2 className="my-4 text-4xl font-medium">
            Te damos la bienvenida a Buddy
          </h2>
          <h2 className="my-4 text-md font-light">
            Controla el progreso y realiza las actividades de protección juntos.
          </h2>
          <Tabs
            key="underlined"
            variant="underlined"
            aria-label="Options"
            color="primary"
          >
            <Tab key="activities" title="Actividades">
              <ActivitiesList router={router} />
            </Tab>
            <Tab key="dashboard" title="Progreso">
              <ProgressBox router={router} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesHome;
