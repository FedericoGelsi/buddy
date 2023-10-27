import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ActivityStartImg from "../assets/Enthusiastic-pana 1.png";
import ActivityFinishImg from "../assets/Happy-student-pana.png";

function ActivityModal({ isOpen, onOpenChange, navigateTo, content, variant }) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className=" min-w-[50%] bg-T600"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col justify-center items-center">
              <Image
                className="max-h-fit"
                src={variant === "start" ? ActivityStartImg : ActivityFinishImg}
                alt="NextUI hero Image"
              />
            </ModalHeader>
            <ModalBody>
              <h2 className="my-4 text-2xl">{content.title}</h2>
              <p className="text-md font-light text-B200">{content.body}</p>
              <p className="text-md font-light text-B200">
                {`Presiona "
                ${
                  variant === "start" ? "Continuar" : "Terminar actividad"
                }" para
                finalizar.`}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button className="light" onPress={navigateTo}>
                {variant === "start" ? "Continuar" : "Terminar actividad"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ActivityModal;
