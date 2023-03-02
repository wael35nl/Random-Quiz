import React from "react";

import style from "../modular-css/navbar.module.css";

import Input from "./Input";

const Navbar = () => {

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
      <Input />
    </nav>
  );
};

export default Navbar;
