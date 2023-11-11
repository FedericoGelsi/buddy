import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  FaUnlock,
  FaSearch,
  FaRegComments,
  FaLock,
  FaInfo,
  FaPuzzlePiece,
} from "react-icons/fa";
const LandingFeatureCard = (props) => {
  const { title, icon, body } = props;
  return (
    <Card className="light">
      <CardHeader className="flex">
        <div className="rounded-xl p-4 bg-S400 shadow-md">
          {icon === "FaUnlock" && <FaUnlock className="text-2xl text-white" />}
          {icon === "FaSearch" && <FaSearch className="text-2xl text-white" />}
          {icon === "FaRegComments" && (
            <FaRegComments className="text-2xl text-white" />
          )}
          {icon === "FaLock" && <FaLock className="text-2xl text-white" />}
          {icon === "FaInfo" && <FaInfo className="text-2xl text-white" />}
          {icon === "FaPuzzlePiece" && (
            <FaPuzzlePiece className="text-2xl text-white" />
          )}
        </div>
        <h4 className="w-full text-center font-medium text-xl">{title}</h4>
      </CardHeader>
      <CardBody className="text-center">{body}</CardBody>
    </Card>
  );
};

export default LandingFeatureCard;
