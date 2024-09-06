import React, { ChangeEvent, useRef, useState } from "react";

import { FormControl, Input, InputLabel } from "@mui/material";

import UpAnimation from "../upAnimation/upAnimation";
import PhoneMask from "../phoneMask/phoneMask";

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
          <FormControl>
            <InputLabel htmlFor="name-input">ваше имя</InputLabel>
            <Input
              className={styles.input}
              value={name}
              onChange={onNameChange}
              id="name-input"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone-input">телефон</InputLabel>
            <Input
              className={styles.input}
              value={phone}
              onChange={onPhoneChange}
              id="phone-input"
              required
              inputComponent={PhoneMask as any}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="mail-input">e-mail</InputLabel>
            <Input
              className={styles.input}
              value={mail}
              onChange={onMailChange}
              id="mail-input"
              required
            />
          </FormControl>
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
