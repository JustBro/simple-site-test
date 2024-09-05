import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setShowRequestModal } from "@/store/ui-slice";
import { Option } from "@/types/types";

import IconLogo from "../icons/iconLogo";
import CallFormModal from "../modals/callFormModal/callFormModal";
import UISelect from "../ui/select/UISelect";
import UpAnimation from "../upAnimation/upAnimation";
import IconPhone from "../icons/iconPhone";

import styles from "./header.module.scss";

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

export default function Header() {
  const dispatch = useAppDispatch();

  const showRequestModal = useAppSelector(
    (state) => state.uiReducer.showRequestModal
  );

  const callBtnRef = useRef<HTMLButtonElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  const onBtnCallClick = () => {
    dispatch(setShowRequestModal(true));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button className={styles.btnMenu} ref={menuRef} type="button">
          <div className={styles.burger}>
            <div className={styles.line}></div>
          </div>
          <UpAnimation ref={menuRef}>меню</UpAnimation>
        </button>
        <UISelect options={options} classList={styles.select} />
        <IconLogo className={styles.logo} />
        <a className={styles.phone} ref={phoneRef} href="tel:+74955272121">
          <UpAnimation ref={phoneRef}>
            <span>+7 495 527 21 21</span>
            <IconPhone />
          </UpAnimation>
        </a>
        <button ref={callBtnRef} className={styles.callBtn} onClick={onBtnCallClick}>
          <UpAnimation ref={callBtnRef} classList={styles.callBtnText}>
            заказать звонок
          </UpAnimation>
        </button>
      </div>
      {showRequestModal && <CallFormModal />}
    </header>
  );
}
