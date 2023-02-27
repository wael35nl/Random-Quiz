import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "../modular-css/navbar.module.css";
import SignUp from "./SignUp";

const Input = (props) => {
  const [InputUsers, setInputUsers] = useState({
    email: "",
    password: "",
  });

  const HandelInput = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInputUsers((prevInput) => {
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };

  const HandelSubmit = (event) => {
    alert("WELCOME");
    event.preventDefault();
    const newInput = { id: uuidv4(), InputUsers };
    props.NewValues(newInput);
    console.log(newInput);
    setInputUsers({
      email: "",
      password: "",
    });
  };

  const HandelPage = (event) => {
    return <SignUp />;
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
      <button type="submit" onClick={HandelPage}>
        Sign Up
      </button>
    </section>
  );
};

export default Input;
