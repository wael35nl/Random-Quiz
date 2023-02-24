import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "../modular-css/Navbar.css";

import NavbarOptions from "./NavbarOptions";
import Input from "./Input";

const Navbar = () => {
  const NewInput = [
    {
      id: uuidv4(),
      email: " ",
      password: " ",
    },
  ];
  const [values, setValues] = useState(NewInput);
  const NewValues = (value) => {
    setValues((PrevValue) => [...PrevValue, value]);
    console.log(value);
  };
  return (
    <nav>
      <NavbarOptions />
      <Input NewValues={NewValues} />
    </nav>
  );
};

export default Navbar;
