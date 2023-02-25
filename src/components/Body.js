import React from "react";

import css from "../modular-css/Body.module.css";

const Body = () => {
  return (
    <div id={css.main}>
      <select id={css.categories}>
        <option disabled>Category</option>
        <option value="">Sport</option>
        <option value="">Languages</option>
        <option value="">Movies</option>
        <option value="">Programming</option>
      </select>
      <section id={css.quizField}>
        <article>
          <h2>Quiz</h2>
          <progress></progress>
          <h3>Scores</h3>
          <h4>Question</h4>
          <p>Answer options</p>
          <p>Buttons</p>
          <button></button>&nbsp;<button></button>&nbsp;<button></button>
          &nbsp;<button></button>
        </article>
      </section>
      <section id={css.hintField}>
        <article>
          <h2>Display / Hint</h2>
        </article>
      </section>
    </div>
  );
};

export default Body;
