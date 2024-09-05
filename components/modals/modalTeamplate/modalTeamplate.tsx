import React, { ReactNode, useEffect, useState } from "react";

import ReactDOM from "react-dom";

import UIBtnClose from "@/components/ui/btnClose/UIBtnClose";

import styles from "./modalTeamplate.module.scss";

type ModalTeamplateProps = {
  children?: ReactNode;
  onClose: () => void;
  classList?: string;
};

export default function ModalTeamplate({ children, onClose, classList }: ModalTeamplateProps) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setHide(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={`${styles.modal} ${hide ? styles.modalHide : ""} ${classList}`}>
      <UIBtnClose onClose={handleClose} />
      {children}
    </div>,
    document.querySelector("body")!
  );
}
