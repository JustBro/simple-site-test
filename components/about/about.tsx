import React from "react";

import Image from "next/image";

import VideoBtn from "../videoBtn/videoBtn";
import IconForAbout from "../icons/iconForAbout";

import styles from "./about.module.scss";

export default function About() {
  return (
    <section className="wrapper">
      <div className={styles.about}>
        <div className={styles.left}>
          <h2 className={styles.title}>о проекте</h2>
          <picture className={styles.picture}>
            <Image
              src="/images/img-about.jpg"
              alt="Фото дома"
              width={1354}
              height={905}
            />
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
              Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,
            </span>
            балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
            территориИ.
          </p>
          <VideoBtn classList={styles.btnVideo} />
        </div>
      </div>
    </section>
  );
}
