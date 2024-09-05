import React from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setShowVideo } from "@/store/ui-slice";
import Image from "next/image";

import FullscreenVideo from "../fullscreenVideo/fullscreenVideo";
import IconPlay from "../icons/iconPlay";

import styles from "./videoBtn.module.scss";

type VideoBtnProps = {
  classList?: string;
};
export default function VideoBtn({ classList = "" }: VideoBtnProps) {
  const dispatch = useAppDispatch();

  const showVideoModal = useAppSelector((state) => state.uiReducer.showVideo);

  const onBtnPlayClick = () => {
    dispatch(setShowVideo(true));
  };

  return (
    <>
      <div className={`${styles.video} ${classList}`}>
        <div className={styles.left}>
          <h3 className={styles.title}>видео о проекте</h3>
          <span className={styles.duration}>1:25 минут</span>
        </div>
        <div className={styles.line}></div>
        <button onClick={onBtnPlayClick} className={styles.right}>
          <Image
            className={styles.preview}
            src="/images/img-video.jpg"
            alt="Превью видео"
            width={302}
            height={242}
          />
          <IconPlay />
          play
        </button>
      </div>
      {showVideoModal && <FullscreenVideo />}
    </>
  );
}
