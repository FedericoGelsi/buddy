import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { FaInfoCircle } from "react-icons/fa";

function AdviceBox(props) {
  const { data, ...otherProps } = props;
  const title = data.title;
  const body = data.body;
  return (
    <Card className="bg-success" {...otherProps}>
      <CardHeader>
        <FaInfoCircle className="w-8 h-8 mr-4"/>
        <h1 className="text-xl font-bold">{title}</h1>
      </CardHeader>
      <CardBody>
        <p>{body}</p>
      </CardBody>
    </Card>
  );
}

export default AdviceBox;
