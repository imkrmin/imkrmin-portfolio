"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import ModalPortal from "./ModalPortal";
import { IoIosCloseCircle } from "react-icons/io";

type ModalContainerProps = {
  children: React.ReactNode;
  isCloseClickOutside?: boolean;
  onClose: () => void;
  variantClasses: string;
  isProjectModal?: boolean;
};

export default function ModalContainer(props: ModalContainerProps) {
  const {
    children,
    isCloseClickOutside,
    onClose,
    variantClasses,
    isProjectModal,
  } = props;
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    if (isCloseClickOutside) {
      onClose();
    }
  });

  return (
    <ModalPortal>
      <div
        className="bg-black bg-opacity-70 fixed inset-0 z-[1200]"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed inset-0 flex justify-center ${variantClasses} bg-[#262626] border border-[#737373] mobile:border-none rounded-[10px] mobile:rounded-none z-[1200]`}
      >
        {isProjectModal && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 w-10 h-10 mobile:w-8 mobile:h-8 z-[1300]"
          >
            <IoIosCloseCircle className="w-full h-full text-[#bcbcbc] hover:text-opacity-80" />
          </button>
        )}
        <div
          ref={modalRef}
          onClick={event => event.stopPropagation()}
          className={`flex flex-col items-center w-full h-full ${
            isProjectModal && "overflow-y-auto p-10 scrollbar-hide"
          }`}
        >
          {children}
        </div>
      </motion.div>
    </ModalPortal>
  );
}
