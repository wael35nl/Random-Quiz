import React from "react";
import styles from "../modular-css/Body.module.css";

const EndQuiz = () => {
  return (
    <div className={styles.thanksContainer}>
      <h3 className={styles.thanks}>Thanks for playing!</h3>
      <button
        className={styles.btn}
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset / New Quiz
      </button>
    </div>
  );
};

export default EndQuiz;
