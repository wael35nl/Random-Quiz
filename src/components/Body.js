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
        <h2>Quiz</h2><br />
        <h3>Right Answers: {0} / {data.length}</h3>
        <h3>Wrong Answers: {0} / {data.length}</h3>
        <progress min={0} value={1} max={data.length}></progress>
        <progress min={0} value={1} max={data.length}></progress>
        <QuizField data={data} />
      </section>
      <section id={css.hintField}>
        <h2>Display / Hint</h2>
      </section>
    </div>
  );
};

export default Body;