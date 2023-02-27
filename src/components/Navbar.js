import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "../modular-css/navbar.module.css";

import Input from "./Input";

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
      <Input NewValues={NewValues} />
    </nav>
  );
};

export default Navbar;
