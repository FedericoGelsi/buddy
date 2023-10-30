"use client";

import React from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { cn } from "@nextui-org/react";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex m-2 bg-content1 hover:bg-content2",
          "flex-row max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

function AnswerRadio({ answers }) {
  const [selected, setSelected] = React.useState("");

  return (
    <RadioGroup className="grow justify-center light" value={selected} onValueChange={setSelected}>
      {answers.map((answer) => {
        return (
          <CustomRadio key={answer.id} aria-label={answer.id} value={answer.id}>
            {answer.title}
          </CustomRadio>
        );
      })}
    </RadioGroup>
  );
}

export default AnswerRadio;
