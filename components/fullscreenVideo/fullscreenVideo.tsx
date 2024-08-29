import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setShowVideoModal } from "@/store/ui-slice";
import styles from "./fullscreenVideo.module.scss";
import UIBtnClose from "../ui/btnClose/UIBtnClose";

export default function FullscreenVideo() {
  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current!;
    const container = containerRef.current!;

    video.onloadedmetadata = () => {
      container.requestFullscreen();
      video.play();
    };

    document.addEventListener("fullscreenchange", onFullscreenchange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenchange);
    };
  }, []);

  const onFullscreenchange = () => {
    if (!document.fullscreenElement) {
      dispatch(setShowVideoModal(false));
    }
  };

  const close = () => {
    dispatch(setShowVideoModal(false));
  };

  return (
    <div ref={containerRef} className={styles.video}>
      <UIBtnClose close={close} />
      <video controls ref={videoRef} src="/video/video.mp4"></video>
    </div>
  );
}
