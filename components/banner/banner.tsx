import React from "react";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section>
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
        <span className={styles.bigText}>inchapin</span>
      </div>
    </section>
  );
}
