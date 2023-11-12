import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import ActivityStartSvg from "../../assets/ActivityStartSvg";
import ActivityFinishSvg from "../../assets/ActivityFinishSvg";
import {Link} from "@nextui-org/link";

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
              {variant === "start" ? (
                <ActivityStartSvg />
              ) : (
                <ActivityFinishSvg />
              )}
            </ModalHeader>
            <ModalBody>
              <h2 className="my-4 text-2xl">{content.title}</h2>
              <p className="text-md font-light text-B200">{content.body}</p>
              <p className="text-md font-light text-B200">
                {variant === "start" ? 'Presiona "Continuar" para iniciar la actividad.' : 'Presiona "Terminar actividad" para finalizar.'}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button as={Link} className="light" href={navigateTo}>
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
