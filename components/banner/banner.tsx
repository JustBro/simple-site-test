import React from "react";

import Image from "next/image";

import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section className="wrapper">
      <Image
        className={styles.img}
        src="/images/img-banner.jpg"
        alt="Дом бизнес-класса"
        width={1760}
        height={600}
      />
      <div className={styles.bottom}>
        <h1 className={styles.title}>
          <span>дом бизнес-класса</span>
          <span>для ценителей роскоши</span>
        </h1>
        <Image
          className={styles.bigText}
          src="/images/inchapin.png"
          alt=""
          width={862}
          height={137}
        />
      </div>
    </section>
  );
}
