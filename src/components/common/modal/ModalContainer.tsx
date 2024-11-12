"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import ModalPortal from "./ModalPortal";
import { IoIosClose } from "react-icons/io";

type ModalContainerProps = {
  children: React.ReactNode;
  isCloseClickOutside?: boolean;
  onClose: () => void;
};

export default function ModalContainer(props: ModalContainerProps) {
  const { children, isCloseClickOutside, onClose } = props;
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    if (isCloseClickOutside) {
      onClose();
    }
  });

  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 flex justify-center w-auto max-w-[1200px] h-auto my-10 mx-auto tablet:mx-5 bg-[#262626] border border-[#737373] rounded-[10px] z-[1200] overflow-y-scroll scrollbar-hide overflow-auto"
      >
        <div ref={modalRef} onClick={event => event.stopPropagation()}>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-0 right-0 w-12 h-12 z-[1200]"
          >
            <IoIosClose className="w-full h-full text-[#bcbcbc]" />
          </button>
          {children}
        </div>
      </motion.div>
    </ModalPortal>
  );
}
