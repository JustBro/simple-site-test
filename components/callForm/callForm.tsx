import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from "./callForm.module.scss";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";
import UpAnimation from "../upAnimation/upAnimation";

export default function CallForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const btnSubmit = useRef<HTMLButtonElement>(null);

  const onNmaeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };
  const onPhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPhone(evt.target.value);
  };
  const onMailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMail(evt.target.value);
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("Имя : " + name);
    console.log("Телефон : " + phone);
    console.log("E-mail : " + mail);
  };

  return (
    <section className={styles.callForm}>
      <h2 className={styles.title}>заказать звонок</h2>
      <form action="" onSubmit={onSubmit}>
        <div className={styles.inputs}>
          <TextField
            onChange={onNmaeChange}
            name={name}
            value={name}
            label="ваше имя"
            required
            variant="filled"
          />
          <InputMask
            mask="+7 (999) 999-99-99"
            name={phone}
            value={phone}
            onChange={onPhoneChange}
          >
            {() => (
              <TextField
                label="Телефон"
                required
                variant="filled"
                InputLabelProps={{
                  shrink: phone ? true : false,
                }}
              />
            )}
          </InputMask>
          <TextField
            onChange={onMailChange}
            value={mail}
            label="e-mail"
            required
            variant="filled"
          />
        </div>
        <p className={styles.policy}>
          Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с
          <a href="#">политикой обработки персональных данных</a>
        </p>
        <button
          className={`${styles.btnSubmit} btn btn--primary`}
          type="submit"
          ref={btnSubmit}
        >
          <UpAnimation ref={btnSubmit} classList={styles.btnSubmitText}>отправить</UpAnimation>
        </button>
      </form>
    </section>
  );
}
