import React from "react";
import css from "../modular-css/Body.module.css";

const Category = ({ data }) => {
    const categories = data.map((category, index) => <option key={category.id}>{index < 9 ? `0${index + 1}` : index + 1}- {category.category === '' ? 'Random' : category.category}</option>)
    return (<div className={css.score}>
        <select id={css.categories}>
            <option>Category</option>
            {categories}
        </select>
        <div className={css.progress}>
            <h3>Right Answers: {0} / {data.length}</h3>
            <progress min={0} value={1} max={data.length}></progress>
        </div>
        <div className={css.progress}>
            <h3>Wrong Answers: {0} / {data.length}</h3>
            <progress min={0} value={1} max={data.length}></progress>
        </div>
    </div>);
}

export default Category;