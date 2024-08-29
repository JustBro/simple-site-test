import React from "react";
import styles from "./videoBtn.module.scss";
import IconPlay from "../icons/iconPlay";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setShowVideoModal } from "@/store/ui-slice";
import FullscreenVideo from "../fullscreenVideo/fullscreenVideo";

export default function VideoBtn() {
  const dispatch = useAppDispatch();

  const showVideoModal = useAppSelector(
    (state) => state.uiReducer.showVideoModal
  );

  const handlePlay = () => {
    dispatch(setShowVideoModal(true));
  };
  
  return (
    <>
      <div className={styles.video}>
        <div className={styles.left}>
          <h3 className={styles.title}>видео о проекте</h3>
          <span className={styles.duration}>1:25 минут</span>
        </div>
        <div className={styles.line}></div>
        <button onClick={handlePlay} className={styles.right}>
          <img
            className={styles.preview}
            src="/images/img-video.jpg"
            alt="Превью видео"
          />
          <IconPlay />
          play
        </button>
      </div>
      {showVideoModal && <FullscreenVideo />}
    </>
  );
}
