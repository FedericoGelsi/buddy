import React from "react";
import { Button } from "@nextui-org/button";

function BuddyButton(props) {
  return <Button {...props}>{props.title}</Button>;
}

export default BuddyButton;
