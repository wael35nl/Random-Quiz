import React, { useState } from "react";

import css from "../modular-css/header.module.css";

import Title from "./Title";

const Header = () => {
  return (
    <header className={css.page_header}>
      <Title />
    </header>
  );
};

export default Header;
