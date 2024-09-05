import React from "react";

import { useAppDispatch } from "@/store/hooks";
import { setShowRequestModal } from "@/store/ui-slice";

import ModalTeamplate from "../modalTeamplate/modalTeamplate";
import CallForm from "@/components/callForm/callForm";

import styles from "./callFormModal.module.scss";

export default function CallFormModal() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setShowRequestModal(false));
  };

  return (
    <ModalTeamplate classList={styles.callFormModal} onClose={handleClose}>
      <CallForm />
    </ModalTeamplate>
  );
}
