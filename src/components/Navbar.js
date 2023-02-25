import React from "react";
// eslint-disable-next-line
import style from "../modular-css/navbar.module.css";

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

      <section className={style.input__section} onSubmit>
        <label for="email">Email</label>&nbsp;
        <input type="email" name="email" id="email" onChange required />
        <label for="password">password</label>&nbsp;
        <input type="password" name="password" id="password" onchange required />
        <button type="submit">LOG IN</button>
        <button type="submit">Sign Up</button>
      </section>
    </nav>
  );
};

export default Navbar;
