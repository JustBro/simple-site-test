import IconLogo from "../icons/iconLogo";
import UISelect from "../ui/select/UISelect";
import styles from "./header.module.scss";
import { Option } from "@/types/types";

export default function Header() {
  const options: Option[] = [
    { value: "house1", label: "Дом на улице Ленина" },
    { value: "house2", label: 'Жилой комплекс "Премиум"' },
    { value: "house3", label: 'Коттеджный посёлок "ЭкоЛайф"' },
    { value: "house4", label: 'Апартаменты "Солнечный берег"' },
    { value: "house5", label: 'Квартиры в "Гармония"' },
    { value: "house6", label: "Элитные дома на Неве" },
    { value: "house7", label: 'Жилой комплекс "Новая Москва"' },
    { value: "house8", label: 'Квартиры в "Городском стиле"' },
    { value: "house9", label: 'Комплекс "Сити Парк"' },
    { value: "house10", label: 'Жилой комплекс "Северное сияние"' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
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
      </div>
    </header>
  );
}
