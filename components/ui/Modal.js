"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 max-w-6xl mx-auto shadow-md border border-teal-600 flex flex-col p-2 rounded-xl dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHide} className="flex z-10 cursor-pointer justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-7 h-7 text-white hover:text-red-400 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6l12 12M6 18L18 6"
          />
        </svg>
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content"),
  );
};

export default Modal;
