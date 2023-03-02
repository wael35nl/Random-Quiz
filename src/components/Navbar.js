import React, { useState } from "react";

import style from "../modular-css/navbar.module.css";

import Input from "./Input";

const Navbar = () => {

  const [onlineUsers, setOnlineUsers] = useState([{
    id: 1,
    userName: "Alex",
    password: "alex2023",
  }]);

  const handleAddOnlineUser = (addOnlineUser) => {
    setOnlineUsers(onlineUsers => [...onlineUsers, addOnlineUser]);
  }

  const handleDeleteOnlineUser = (onlineUserId) => {
    setOnlineUsers(onlineUsers => onlineUsers.filter(onlineUser => onlineUser.id !== onlineUserId));
  }

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
      <Input onlineUsers={onlineUsers} onAddOnlineUser={handleAddOnlineUser} onDeleteOnlineUser={handleDeleteOnlineUser} />
    </nav>
  );
};

export default Navbar;
