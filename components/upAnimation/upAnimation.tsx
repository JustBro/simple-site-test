import React, { forwardRef, ReactNode, useEffect, useState } from "react";
import styles from "./upAnimation.module.scss";

type Props = {
  classList?: string;
  children: ReactNode;
};

const UpAnimation = forwardRef<HTMLElement, Props>(
  ({ children, classList = "" }, ref) => {
    const [animate, setAnimate] = useState(false);
    const [refresh, setRefresh] = useState(0);

    const parent = ref && "current" in ref ? ref.current : null;

    const onMouseEnter = () => {
      setAnimate(true);
    };
    const onMouseLeave = () => {
      setAnimate(false);
    };

    useEffect(() => {
      if (!refresh || !parent) {
        setRefresh((prev) => prev + 1);
        return;
      }

      if (parent) {
        parent.addEventListener("mouseenter", onMouseEnter);
        parent.addEventListener("mouseleave", onMouseLeave);
      }

      return () => {
        if (parent) {
          parent.removeEventListener("mouseenter", onMouseEnter);
          parent.removeEventListener("mouseleave", onMouseLeave);
        }
      };
    }, [parent]);

    return (
      <div className={`${styles.wrapper} ${animate ? styles.animate : ""}`}>
        <div className={styles.textWrapper}>
          <div className={classList}>{children}</div>
          <div className={`${styles.hidenText} ${classList}`}>{children}</div>
        </div>
      </div>
    );
  }
);

export default UpAnimation;
