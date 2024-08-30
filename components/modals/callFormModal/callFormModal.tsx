import React from "react";
import styles from "./callFormModal.module.scss";
import ModalTeamplate from "../modalTeamplate/modalTeamplate";
import CallForm from "@/components/callForm/callForm";
import { useAppDispatch } from "@/store/hooks";
import { setShowRequestModal } from "@/store/ui-slice";

export default function CallFormModal() {
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(setShowRequestModal(false));
  };

  return (
    <ModalTeamplate classList={styles.callFormModal} onClose={close}>
      <CallForm />
    </ModalTeamplate>
  );
}
