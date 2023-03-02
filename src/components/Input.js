import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NowOnline from "./NowOnline";

import style from "../modular-css/navbar.module.css";

const Input = () => {

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [newOnlineUser, setNewOnlineUser] = useState({
    id: uuidv4(),
    userName: "",
    password: "",
  });

  const [newOnline, setNewOnline] = useState(false);

  const handelInput = (event) => {
    setNewOnlineUser({ ...newOnlineUser, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    alert(`welcome ${newOnlineUser.userName}`);
    setNewOnlineUser({
      id: uuidv4(),
      userName: "",
      password: "",
    });
    setOnlineUsers([...onlineUsers, newOnlineUser]);
  };

  const handleClick = () => {
    if (newOnlineUser.userName.length !== 0 && newOnlineUser.password.length !== 0) {
      setTimeout(() => {
        setNewOnline(true);
      }, 1);
    }
  }

  let nowOnline = onlineUsers.map(online => (online.userName + ' - '));

  const currentOnline = newOnline ?
    <div className={style.currentOnline}><NowOnline nowOnline={nowOnline} /><button onClick={() => { setNewOnline(false) }}>Log Out</button></div>
    :
    <form className={style.input__section} onSubmit={handelSubmit}>
      <label htmlFor="name">User Name</label>&nbsp;
      <input type='text' name='userName' value={newOnlineUser.userName} onChange={handelInput} required />
      <label htmlFor="password">Password</label>&nbsp;
      <input type="password" name="password" id="password" onChange={handelInput} value={newOnlineUser.password} required />
      <button type="submit" onClick={handleClick}>
        LOG IN
      </button>
      <button type="submit">
        Sign Up
      </button>
    </form>

  return (
    <>{currentOnline}</>
  );
};

export default Input;