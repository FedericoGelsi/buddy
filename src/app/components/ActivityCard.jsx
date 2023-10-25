import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import BuddyButton from "../components/BuddyButton";
import Image from "next/image";

function ActivityCard(props) {
  return (
    <Card className="max-w-md">
      <CardHeader
        className={`min-h-[13rem] p-0 items-end flex justify-center grow items-center ${
          props.isExclusive && "flex-col"
        }`}
        style={{ backgroundColor: "#EBF0F3" }}
      >
        <Image
          className="max-h-fit"
          src={props.cardImage}
          alt="NextUI hero Image"
        />
        {props.isExclusive && (
          <div
            className="text-center self-stretch"
            style={{ backgroundColor: "#FBD4A4", color: "#AC6714" }}
          >
            Exclusivo para cuidadores
          </div>
        )}
      </CardHeader>
      <CardBody style={{ backgroundColor: "#2A4B62" }}>
        <h3 className="text-2xl leading-loose" style={{ color: 'white' }}>{props.cardTitle}</h3>
        <p style={{ color: 'white' }}>{props.cardContent}</p>
      </CardBody>
      <CardFooter style={{ backgroundColor: "#2A4B62" }}>
        <BuddyButton
          className="light"
          fullWidth={true}
          title={props.cardButtonTitle}
          onPress={props.onPress}
          isDisabled={props.isDisabled}
        />
      </CardFooter>
    </Card>
  );
}

export default ActivityCard;
