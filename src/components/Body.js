import React, { useState } from "react";

import css from "../modular-css/Body.module.css";
import Category from "./Category";
import QuizField from "./QuizField";

const Body = ({ data }) => {

  const [count, setCount] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  return (
    <div id={css.main}>
      <Category data={data} count={count} right={right} wrong={wrong} />
      <section id={css.quizField}>
        <h2>Quiz - - ( Multiple answers possible, for the best score try to find the correct answer ASAP... GOOD LUCK !! )</h2>
        <QuizField data={data} count={count} setCount={setCount} setRight={setRight} setWrong={setWrong} />
      </section>
      <section id={css.hintField}></section>
    </div>
  );
};

export default Body;