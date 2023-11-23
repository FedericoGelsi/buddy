import React from "react";
import ReactPlayer from "react-player";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
const VideoModal = ({ isOpen, onOpenChange, content }) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="min-w-[50%] bg-T600"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="">
              <h2 className="my-4 text-2xl">{content.title}</h2>
              <p className="text-md font-light text-B200">{content.body}</p>
              <div className="flex justify-center m-8">
                <ReactPlayer url="/simulation/game-demo.mp4" controls />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
