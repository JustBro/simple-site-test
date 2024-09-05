import React from "react";

import styles from "./UIBtnClose.module.scss";

type UIBtnCloseProps = {
  onClose: () => void;
  classList?: string;
};

export default function UIBtnClose({ onClose, classList }: UIBtnCloseProps) {
  return (
    <button
      className={`${styles.btnClose} ${classList}`}
      onClick={onClose}
    ></button>
  );
}
