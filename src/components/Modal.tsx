import { IoClose } from "react-icons/io5";
import React from "react";

interface ModalProps {
  visible?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal(props: ModalProps) {
  if (!props.visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="relative">
          <button
            onClick={props.onClose}
            className={`absolute top-0 right-0 m-2 btn-icon btn-icon-sm bg-inherit text-primary-500 text-lg`}
          >
            <IoClose />
          </button>
          <div className="modal-content p-1">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
