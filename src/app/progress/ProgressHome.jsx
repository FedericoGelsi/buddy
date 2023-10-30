"use client";

import React from "react";
import BannerSuperior from "../components/BannerSuperior";
import { Button } from "@nextui-org/button";
import { FaAngleLeft } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import ActivitiesList from "../components/ActivitiesList";
import { useRouter } from "next/navigation";
import ProgressBox from "./ProgressBox";

function ProgressHome() {
  const router = useRouter();

  return (
    <div className="container flex-col">
      <BannerSuperior />
      <div className="mx-4" >
      <Button variant="light" startContent={<FaAngleLeft />} size="lg" style={{color: 'white'}}>
          Atras
      </Button>
        <div style={{ margin: '20px' }}>
          <h2 className="my-4 text-4xl font-medium" style={{ color: 'white' }}>
            Te damos la bienvenida a Buddy
          </h2>
          <h2 className="my-4 text-md font-light" style={{ color: 'white' }}>
            Controla el progreso y realiza las actividades de protección juntos.
          </h2>
          <Tabs
            key="underlined"
            variant="underlined"
            aria-label="Options"
            color="success"
          >
            <Tab key="activities" title="Actividades">
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

export default ProgressHome;
