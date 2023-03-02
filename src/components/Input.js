import React, { useState } from "react";

import style from "../modular-css/navbar.module.css";

const Input = ({ onlineUsers, onAddOnlineUser, onDeleteOnlineUser }) => {

  const [createId, setCreateId] = useState(2);
  const [decrementId, setDecrementId] = useState(1);

  const [newOnlineUser, setNewOnlineUser] = useState({
    id: createId,
    userName: "",
    password: "",
  });

  const [nowOnline, setNowOnline] = useState(false);

  const handelInput = (event) => {
    setNewOnlineUser({ ...newOnlineUser, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    alert(`welcome ${newOnlineUser.userName}`);
    setNewOnlineUser({
      id: createId,
      userName: "",
      password: "",
    });
    onAddOnlineUser(newOnlineUser);
  };

  const handleAddClick = () => {
    if (newOnlineUser.userName.length !== 0 && newOnlineUser.password.length !== 0) {
      setTimeout(() => {
        setNowOnline(true);
      }, 1);
    }
    setCreateId(createId => createId + 1);
    setDecrementId(decrementId => decrementId + 1);
  }

  const handleRemoveClick = () => {
    onDeleteOnlineUser(onlineUsers[createId - decrementId].id);
    setNowOnline(false);
  }

  const newOnline = onlineUsers.map(online => (online.userName + ' - '));

  const currentOnline = nowOnline ?
    <div className={style.currentOnline}><h2 style={{ backgroundColor: 'green', borderRadius: '15px', padding: '0.3em 0.3em 0.1em 0.3em' }}>Currently online: &nbsp;&nbsp; {newOnline}</h2><button onClick={handleRemoveClick}>Log Out</button></div>
    :
    <form className={style.input__section} onSubmit={handelSubmit}>
      <label htmlFor="name">User Name</label>&nbsp;
      <input type='text' name='userName' value={newOnlineUser.userName} onChange={handelInput} required />
      <label htmlFor="password">Password</label>&nbsp;
      <input type="password" name="password" id="password" onChange={handelInput} value={newOnlineUser.password} required />
      <button type="submit" onClick={handleAddClick}>
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