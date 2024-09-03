import React from "react";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section className="wrapper">
      <img
        className={styles.img}
        src="/images/img-banner.jpg"
        alt="Дом бизнес-класса"
      />
      <div className={styles.bottom}>
        <h1 className={styles.title}>
          <span>дом бизнес-класса</span>
          <span>для ценителей роскоши</span>
        </h1>
        <img className={styles.bigText} src="/images/inchapin.png" alt="" />
      </div>
    </section>
  );
}
