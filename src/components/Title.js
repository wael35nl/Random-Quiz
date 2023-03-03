import React, { useState } from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import css from "../modular-css/Title.module.css";


const Title = () => {

  const [firstClick, setFirstClick] = useState(false);
  const [animation, setAnimation] = useState(0);

  const MySwal = withReactContent(Swal);

  const handleClick = () => {
    if (!firstClick) {
      MySwal.fire({
        iconHtml: <span>🥚</span>,
        title: <h1 style={{ fontSize: '3rem' }}>Easter Egg No.1 Found!<br />Can you find any more?</h1>,
        confirmButtonText: <h2>Do your best</h2>,
      });
      setFirstClick(true);
    } else {
      if (animation < 8) {
        setAnimation(animation + 1);
        delay(5000).then(() => {
          setAnimation(animation + 2);
        });
      } else {
        setAnimation(0);
      }
    }
  };

  return (
    <h1
      onClick={handleClick}
      className={css.title}
      animation={animation}
    >
      Quiz Time
    </h1>
  );
};

export default Title;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
