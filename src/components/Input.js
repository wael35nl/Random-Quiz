import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "../modular-css/navbar.module.css";

const Input = (props) => {
  const [InputUsers, setInputUsers] = useState({
    email: "",
    password: "",
  });

  const HandelInput = (event) => {
    setInputUsers((prevInput) => {
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };

  const HandelSubmit = (event) => {
    alert(`welcome ${InputUsers.email}`);
    event.preventDefault();
    const newInput = { id: uuidv4(), InputUsers };
    props.NewValues(newInput);
    setInputUsers({
      email: "",
      password: "",
    });
  };

  return (
    <section className={style.input__section} onSubmit={HandelSubmit}>
      <label htmlFor="email">Email</label>&nbsp;
      <input
        type="email"
        name="email"
        id="email"
        onChange={HandelInput}
        value={InputUsers.email}
        required
      />
      <label htmlFor="password">Password</label>&nbsp;
      <input
        type="password"
        name="password"
        id="password"
        onChange={HandelInput}
        value={InputUsers.password}
        required
      />
      <button type="submit" onClick={HandelSubmit}>
        LOG IN
      </button>
      <button type="submit">
        Sign Up
      </button>
    </section>
  );
};

export default Input;
