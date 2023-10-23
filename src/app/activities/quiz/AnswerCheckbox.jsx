"use client";

import React from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { cn } from "@nextui-org/react";

export const CustomCheckBox = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Checkbox
      {...otherProps}
      classNames={{
        base: cn(
          "flex m-2 bg-content1 hover:bg-content2",
          "flex-row max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
    >
      {children}
    </Checkbox>
  );
};

function AnswerCheckboxGroup({ answers }) {
  const [selected, setSelected] = React.useState([]);

  return (
    <CheckboxGroup
      className="grow justify-center"
      value={selected}
      onValueChange={setSelected}
    >
      {answers.map((answer) => {
        return (
          <CustomCheckBox aria-label={answer.id} value={answer.id}>
            {answer.title}
          </CustomCheckBox>
        );
      })}
    </CheckboxGroup>
  );
}

export default AnswerCheckboxGroup;
