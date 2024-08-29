import React from "react";
import styles from "./about.module.scss";
import IconForAbout from "../icons/iconForAbout";
import VideoBtn from "../videoBtn/videoBtn";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <a className={styles.link} href="#">о проекте</a>
        <picture className={styles.picture}>
          <img src="/images/img-about.jpg" alt="Фото дома" />
          <IconForAbout className={styles.imgIcon} />
        </picture>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>
          <span>уютное и безопасное пространство для счастливой,</span>
          <span className={styles.textAccent}>
            спокойной и размеренной жизни
          </span>
        </h2>
        <p className={styles.text}>
          <span className={styles.textAccent}>
            Квартиры от 65 до 356 м2 с чистовой отделкой,
          </span>
          балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
          территориИ.
        </p>
        <VideoBtn />
      </div>
    </section>
  );
}
