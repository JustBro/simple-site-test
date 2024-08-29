import React from "react";
import styles from "./UIBtnClose.module.scss";

type Props = {
  close: () => void;
  classList?: string;
};

export default function UIBtnClose({ close, classList }: Props) {
  return (
    <button
      className={styles.btnClose + " " + classList}
      onClick={close}
    ></button>
  );
}
