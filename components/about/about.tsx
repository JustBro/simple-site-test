import React from "react";
import styles from "./about.module.scss";
import IconForAbout from "../icons/iconForAbout";
import VideoBtn from "../videoBtn/videoBtn";

export default function About() {
  return (
    <section className={styles.about + " wrapper"}>
      <div className={styles.left}>
        <h2 className={styles.title}>о проекте</h2>
        <picture className={styles.picture}>
          <img src="/images/img-about.jpg" alt="Фото дома" />
          <div className={styles.circle}>
            <IconForAbout className={styles.imgIcon} />
          </div>
        </picture>
      </div>
      <div className={styles.right}>
        <h2 className={styles.description}>
          <span>уютное и безопасное пространство для счастливой,</span>
          <span className={styles.textAccent}>
            спокойной и размеренной жизни
          </span>
        </h2>
        <p className={styles.info}>
          <span className={styles.textAccent}>
            Квартиры от 65 до 356 м2 с чистовой отделкой,
          </span>
          балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
          территориИ.
        </p>
        <VideoBtn classList={styles.btnVideo} />
      </div>
    </section>
  );
}
