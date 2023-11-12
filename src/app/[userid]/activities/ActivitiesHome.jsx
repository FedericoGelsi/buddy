'use client'
import React from "react";
import BannerSuperior from "./BannerSuperior";
import { Button } from "@nextui-org/button";
import { FaAngleLeft } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import ActivitiesList from "./ActivitiesList";
import ProgressBox from "../../progress/ProgressBox";
import { Link } from "@nextui-org/link";
const ActivitiesHome = () => {
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
              <ActivitiesList />
            </Tab>
            <Tab key="dashboard" title="Progreso">
              <ProgressBox />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesHome;
