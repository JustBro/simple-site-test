import React, { useEffect, useRef } from "react";

import { useAppDispatch } from "@/store/hooks";
import { setShowVideo } from "@/store/ui-slice";

import UIBtnClose from "../ui/btnClose/UIBtnClose";

import styles from "./fullscreenVideo.module.scss";

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

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const onFullscreenChange = () => {
    if (!document.fullscreenElement) {
      dispatch(setShowVideo(false));
    }
  };
  const handleClose = () => {
    dispatch(setShowVideo(false));
  };

  return (
    <div ref={containerRef} className={styles.video}>
      <UIBtnClose onClose={handleClose} />
      <video controls ref={videoRef} src="/video/video.mp4"></video>
    </div>
  );
}
