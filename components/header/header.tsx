import IconLogo from "../icons/IconLogo";
import UISelect from "../ui/select/UISelect";
import styles from "./header.module.scss";
import { Option } from "@/types/types";

export default function Header() {
  const options: Option[] = [
    { value: "one", label: "1-комнатная" },
    { value: "two", label: "2-комнатная" },
    { value: "three", label: "3-комнатная" },
    { value: "penthouse", label: "Пентхаус" },
  ];

  return (
    <header className={styles.header}>
      <button className={styles.btnMenu} type="button">
        <div className={styles.burger}>
          <div className={styles.line}></div>
        </div>
        Меню
      </button>
      <UISelect options={options} />
      <IconLogo className={styles.logo} />
      <a className={styles.phone} href="tel:+74955272121">
        +7 495 527 21 21
      </a>
      <button className={styles.btnCall}>ЗАКАЗАТЬ ЗВОНОК</button>
    </header>
  );
}
