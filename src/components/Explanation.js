import React from "react";
import image from "../images/ezgif.com-crop.gif";
import css from "../modular-css/Body.module.css";

const getQuestionObjectById = (data, id) => {
  for (let index = 0; index < data.length; index++) {
    if (id === data[index].id) {
      return data[index];
    }
  }
  return null;
};

const Explanation = ({ data, id, showExplanation, setShowExplanation }) => {
  const questionObj = getQuestionObjectById(data, id);

  if (showExplanation) {
    if (questionObj.explanation != null) {
      return (
        <div className={css.explanation}>
          <button
            onClick={() => {
              setTimeout(() => {
                setShowExplanation(false);
              }, 1);
            }}
            className={css.explanationBtn}>
            X
          </button>
          <h3>{questionObj.explanation}</h3>
        </div>
      );
    } else {
      return (
        <div className={css.explanation}>
          <button
            onClick={() => {
              setTimeout(() => {
                setShowExplanation(false);
              }, 1);
            }} className={css.explanationBtn}
          >
            X
          </button>
          <h3>
            Unfortunately, we don't have an explanation for this right now. Here
            is a useful tool to research:{" "}
            <a href="https://www.w3schools.com/">W3Schools</a>
          </h3>
        </div>
      );
    }
  }

  return (
    <div className={css.gifParent}>
      <img src={image} alt='Quiz Time Logo' className={css.gif}></img>
    </div>
  );
};

export default Explanation;
