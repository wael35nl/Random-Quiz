import React from "react";
import css from "../modular-css/Body.module.css";

const Category = ({ data, count, right, wrong }) => {

    const categories = data.map((category, index) => <option key={category.id}>{index < 9 ? `0${index + 1}` : index + 1}- {category.category === '' ? 'Random' : category.category}</option>)
    return (<div className={css.score}>
        <select id={css.categories}>
            <option>Category</option>
            {categories}
        </select>
        <div className={css.progressAlign}>
            <div className={css.progress}>
                <progress min={0} value={count + 1} max={data.length}></progress>
                <h3>Total answers: ( {right + wrong} )</h3>
                <h3>Correct: ( {right} completions ) FROM ( {data.length} ) questions</h3>
                <h3>Incorrect: ( {wrong} attempts ) FROM ( {data.length} ) questions</h3>
            </div>
        </div>
    </div>);
}

export default Category;