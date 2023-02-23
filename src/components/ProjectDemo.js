import React from "react";
import css from '../modular-css/ProjectDemo.module.css';

const ProjectDemo = () => {
  return (
    <>
      <header>
        <h1>Header = some gif or marquee</h1>
      </header>
      <nav>
        <h2>logo - - - - - Nav bar = about - contact - sign up - log in</h2>
      </nav>
      <main>
        <select id={css.categories}>
          <option selected disabled>
            Category
          </option>
          <option value="">Sport</option>
          <option value="">Languages</option>
          <option value="">Movies</option>
          <option value="">Programming</option>
        </select>
        <section className={css.quizField}>
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
        <section className={css.hintField}>
          <article>
            <h2>Display / Hint</h2>
          </article>
        </section>
      </main>
      <footer>
        <h2>Footer = copy rights - contact - social media</h2>
      </footer>
    </>
  );
};

export default ProjectDemo;