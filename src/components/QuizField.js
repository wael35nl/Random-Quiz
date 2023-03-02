import React, { useState, useEffect } from "react";

import styles from "../modular-css/quiz-field.module.css";

const QuizField = ({ data, count, setCount, setRight, setWrong, setId, setShowExplanation, setEnd }) => {

  useEffect(() => {
    setId(data[count].id);
    // eslint-disable-next-line
  }, [count, data]);

  const [isActive, setIsActive] = useState(true);
  // eslint-disable-next-line
  const questions = data.map((question, index) => {
    const determineAnswer = (element, event) => {
      if (isActive) {
        if (element === "true") {
          event.style.backgroundColor = "#3a5a40";
          setRight((right) => right + 1);
          setIsActive(false);
        } else {
          event.style.backgroundColor = "#8c1c13";
          setWrong((wrong) => wrong + 1);
          setIsActive(false);
        }
      }
    };

    if (index === count) {
      return (
        <div key={question.id} className={styles.quizField}>
          <h2>
            {index + 1}- &nbsp; Category:{" "}
            <span>
              {question.category === "" ? "Random" : question.category}
            </span>{" "}
            &nbsp; / &nbsp; Difficulty:{" "}
            <span
              style={{
                color:
                  question.difficulty === "Easy"
                    ? "#55a630"
                    : question.difficulty === "Medium"
                      ? "rgb(255, 165, 0)"
                      : "#00b4d8",
              }}
            >
              {question.difficulty}
            </span>
            <br />
            <br />
            {question.question}
          </h2>
          <ul>
            <li
              className={question.answers.answer_a === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_a_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_a === null
                ? ""
                : `A : ${question.answers.answer_a}`}
            </li>
            <li
              className={question.answers.answer_b === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_b_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_b === null
                ? ""
                : `B : ${question.answers.answer_b}`}
            </li>
            <li
              className={question.answers.answer_c === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_c_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_c === null
                ? ""
                : `C : ${question.answers.answer_c}`}
            </li>
            <li
              className={question.answers.answer_d === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_d_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_d === null
                ? ""
                : `D : ${question.answers.answer_d}`}
            </li>
            <li
              className={question.answers.answer_e === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_e_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_e === null
                ? ""
                : `E : ${question.answers.answer_e}`}
            </li>
            <li
              className={question.answers.answer_f === null ? "" : styles.li}
              onClick={(event) => {
                determineAnswer(
                  question.correct_answers.answer_f_correct,
                  event.target
                );
              }}
            >
              {question.answers.answer_f === null
                ? ""
                : `F : ${question.answers.answer_f}`}
            </li>
          </ul>
        </div>
      );
    }
  });

  return (
    <div>
      {questions}
      <button
        className={styles.btn}
        disabled={count === 19}
        onClick={() => {
          setTimeout(() => {
            setCount((count) => count + 1);
            setIsActive(true);
          }, 1);
        }}
      >
        Next Question / Skip
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setTimeout(() => {
            setShowExplanation(true);
          }, 1);
        }}
      >
        Get Explanation
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset / New Quiz
      </button>
      <button className={styles.btn} onClick={() => {
        setTimeout(() => {
          setEnd(true);
        }, 1);
      }}>
        End The Quiz
      </button>
    </div>
  );
};

export default QuizField;
