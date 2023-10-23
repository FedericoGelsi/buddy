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

function ActivityModal({ isOpen, onOpenChange, navigateTo }) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      style={{ backgroundColor: "#1E3646" }}
      className=" min-w-[50%]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col justify-center items-center">
              <Image
                className="max-h-fit"
                src={ActivityStartImg}
                alt="NextUI hero Image"
              />
            </ModalHeader>
            <ModalBody>
              <h2 className="my-4 text-2xl">
                Estás a punto de iniciar el Identikit
              </h2>
              <p
                className="text-md font-light"
                style={{ color: "#B2B2B3" }}
              >
                A continuación, verás una serie de imágenes de perfiles de redes
                sociales. ¿Estás listo para desafiar tus habilidades y detectar
                cuál de ellos es sospechoso?
              </p>
              <p
                className="text-md font-light"
                style={{ color: "#B2B2B3" }}
              >
                Presiona "Continuar" para iniciar la actividad.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button className="light" onPress={navigateTo}>
                Continuar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ActivityModal;
