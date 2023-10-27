import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

function AdviceBox({ data }) {
  const title = data.title;
  const body = data.body;
  return (
    <Card className="bg-success">
      <CardHeader>
        <h1>{title}</h1>
      </CardHeader>
      <CardBody>
        <p>{body}</p>
      </CardBody>
    </Card>
  );
}

export default AdviceBox;
