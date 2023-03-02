import React, { useState } from "react";

import css from "../modular-css/Title.module.css";


const Title = () => {

  const [firstClick, setFirstClick] = useState(false);
  const [animation, setAnimation] = useState(0);

  const handleClick = () => {
    if (!firstClick) {
      alert('Easter Egg No.1 Found! Can you find any more?')
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
