import React from "react";

import css from "../modular-css/Body.module.css";
import Category from "./Category";
import QuizField from "./QuizField";

const Body = (props) => {
  const { data } = props;

  return (
    <div id={css.main}>
      <Category data={data} />
      <section id={css.quizField}>
        <h2 className={css.quizTitle}>Quiz</h2>
        <QuizField data={data} />
      </section>
      <section id={css.hintField}></section>
    </div>
  );
};

export default Body;
