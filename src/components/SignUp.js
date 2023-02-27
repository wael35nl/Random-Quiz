import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "../modular-css/SignUp.module.css";

const SignUp = (props) => {
  const [NewUser, setNewUser] = useState({
    firstName: "",
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const HandelNewUser = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setNewUser((prevInput) => {
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };

  const HandelSignUp = (event) => {
    event.preventDefault();
    const newInput = { id: uuidv4(), NewUser };
    props.HandelNewUser(newInput);

    setNewUser({
      firstName: "",
      LastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
    
  };

  return (
    <div className={styles.SignUp_container}>
      <form className={styles.SignUp}>
        <h2>Email Sign Up Form</h2>
        <div onSubmit={HandelSignUp} className={styles.form}>
          <label htmlFor="name">First Name</label>&nbsp;
          <input
            type=" firstName"
            name="firstName"
            id="firstName"
            onChange={HandelNewUser}
            value={NewUser.firstName}
            required
          />
          <label htmlFor="name">Last Name</label>&nbsp;
          <input
            type=" LastName"
            name="LastName"
            id="LastName"
            onChange={HandelNewUser}
            value={NewUser.LastName}
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
            name="repeatPassword"
            id=" repeatPassword"
            onChange={HandelNewUser}
            value={NewUser.repeatPassword}
            required
          />
          <button className={styles.btn} type="submit" onClick={HandelSignUp}>
            Sign Up
          </button>
        </div>
       
      </form>
    </div>
  );
};

export default SignUp;
