import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "../modular-css/navbar.module.css";

// import Input from "./Input";

const Navbar = () => {
  const NewInput = [
    {
      id: uuidv4(),
      email: "",
      password: "",
    },
  ];
  const [values, setValues] = useState(NewInput);
  const NewValues = (value) => {
    setValues((PrevValue) => [...PrevValue, value]);
    console.log(values);
  };
  return (
    <nav>
      <section className={style.option__container}>
        <ul>
          <li>
            <a href="https://www.https://github.com/wael35nl/Random-Quiz/tree/master.com">
              Home
            </a>
          </li>
          <li>
            <a href="https://www.https://github.com/wael35nl/Random-Quiz/tree/master.com">
              About
            </a>
          </li>
        </ul>
      </section>

      <section className={style.input__section} onSubmit>
        <label htmlFor="email">Email</label>&nbsp;
        <input type="email" name="email" id="email" onChange required />
        <label htmlFor="password">password</label>&nbsp;
        <input type="password" name="password" id="password" onchange required />
        <button type="submit">LOG IN</button>
        <button type="submit">Sign Up</button>
      </section>
      {/* <Input NewValues={NewValues} /> */}
    </nav>
  );
};

export default Navbar;