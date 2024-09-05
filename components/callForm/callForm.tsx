import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

import UpAnimation from "../upAnimation/upAnimation";

import styles from "./callForm.module.scss";

export default function CallForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const btnSubmitRef = useRef<HTMLButtonElement>(null);

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onMailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setMail("");
    console.log(`Имя : ${name}`);
    console.log(`Телефон : ${phone}`);
    console.log(`E-mail : ${mail}`);
  };

  return (
    <section className={styles.callForm}>
      <h2 className={styles.title}>заказать звонок</h2>
      <form action="">
        <div className={styles.inputs}>
          <TextField
            onChange={onNameChange}
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
          onClick={handleSubmit}
          className={`${styles.btnSubmit} btn btn--primary`}
          ref={btnSubmitRef}
          type="button"
        >
          <UpAnimation ref={btnSubmitRef} classList={styles.btnSubmitText}>
            отправить
          </UpAnimation>
        </button>
      </form>
    </section>
  );
}
