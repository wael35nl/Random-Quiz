import React from "react";
import { HiArchive } from "react-icons/fa";
import style from "../modular-css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <section className="option__container">
        <ul>
          <li>
            <a href="https://www.https://github.com/wael35nl/Random-Quiz/tree/master.com">
              Questions
            </a>
          </li>
          <li>
            <a href="https://www.https://github.com/wael35nl/Random-Quiz/tree/master.com">
              Category
            </a>
          </li>
          <li>
            <a href="https://github.com/wael35nl/Random-Quiz/tree/master">
              score
            </a>
          </li>
          <li>
            <a href="https://github.com/wael35nl/Random-Quiz/tree/master">
              Create
            </a>
          </li>
        </ul>
      </section>

      <section className=" input__section" /*onSubmit*/>
        <label>Email</label>
        <input type="email" name="email" id="email" /*onChange*/ required />
        <label>password</label>
        <input
          type="password"
          name="password"
          id="password"
          /*onchange*/
          required
        />
        <button type="submit" className="navbar__btn">
          LOG IN
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
