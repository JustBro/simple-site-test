import React, { useEffect, useState } from "react";
import styles from "./modalTeamplate.module.scss";
import ReactDOM from "react-dom";
import UIBtnClose from "@/components/ui/btnClose/UIBtnClose";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
};

export default function ModalTeamplate({ children, onClose }: Props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const close = () => {
    setHide(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      close();
    }
  };

  return ReactDOM.createPortal(
    <section className={styles.modal + (hide ? " " + styles.modalHide : "")}>
      <UIBtnClose close={close} />
      {children}
    </section>,
    document.querySelector("body")!
  );
}
