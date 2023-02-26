import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "../modular-css/SignUp.module.css";

const SignUp = (props) => {
  const [NewUser, setNewUser] = useState({
    Firstname: "",
    name: "",
    email: "",
    password: "",
    Repeatpassword: "",
  });
  const HandelNewUser = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setNewUser((prevInput) => {
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };

  const HandelSignUp = (event) => {
    event.preventDefault();
    const newInput = { id: uuidv4(), NewUser };
    props.HandelNewUser(newInput);

    setNewUser({
      Firstname: "",
      Lastname: "",
      email: "",
      password: "",
      Repeatpassword: "",
    });
  };

  return (
    <form className={styles.SignUp}>
      <h2>Email Sign Up Form</h2>
      <div onSubmit={HandelSignUp} className={styles.form}>
        <label htmlFor="name">First Name</label>&nbsp;
        <input
          type=" Firstname"
          name="Firstname"
          id="Firstname"
          onChange={HandelNewUser}
           value={NewUser.Firstname}
          required
        />
        <label htmlFor="name">Last Name</label>&nbsp;
        <input
          type=" Lastname"
          name="Lastname"
          id="Lastname"
          onChange={HandelNewUser}
          value={NewUser.Lastname}
          required
        />
        <label htmlFor="email">Email</label>&nbsp;
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@test.com"
          onChange={HandelNewUser}
          value={NewUser.email}
          required
        />
        <label htmlFor="password">password</label>&nbsp;
        <input
          type="password"
          name="password"
          id="password"
          onChange={HandelNewUser}
          value={NewUser.password}
          required
        />
        <label htmlFor="password"> Repeat password</label>&nbsp;
        <input
          type="password"
          name="Repeatpassword"
          id=" Repeatpassword"
          onChange={HandelNewUser}
          value={NewUser.Repeatpassword}
          required
        />
        <button type="submit" onClick={HandelSignUp}>
          Sign Up
        </button>
      </div>
      f
    </form>
  );
};

export default SignUp;
