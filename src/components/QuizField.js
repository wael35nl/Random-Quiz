import React from "react";

import styles from '../modular-css/quiz-field.module.css'

const QuizField = ({ data }) => {
    const questions = data.map((question, index) => <div key={question.id} className={styles.quizField}>
        <h2 className={styles.question}>{index + 1}- {question.category === "" ? 'Random' : question.category}:<br /><br /> {question.question}</h2>
        <ol>
            <li className={question.answers.answer_a === null ? '' : styles.li}>{question.answers.answer_a === null ? '' : `A: ${question.answers.answer_a}`}</li>
            <li className={question.answers.answer_b === null ? '' : styles.li}>{question.answers.answer_b === null ? '' : `B: ${question.answers.answer_b}`}</li>
            <li className={question.answers.answer_c === null ? '' : styles.li}>{question.answers.answer_c === null ? '' : `C: ${question.answers.answer_c}`}</li>
            <li className={question.answers.answer_d === null ? '' : styles.li}>{question.answers.answer_d === null ? '' : `D: ${question.answers.answer_d}`}</li>
            <li className={question.answers.answer_e === null ? '' : styles.li}>{question.answers.answer_e === null ? '' : `E: ${question.answers.answer_e}`}</li>
            <li className={question.answers.answer_f === null ? '' : styles.li}>{question.answers.answer_f === null ? '' : `F: ${question.answers.answer_f}`}</li>
        </ol>
    </div>)

    return (
        <div>{questions}</div>
    );
}

export default QuizField;