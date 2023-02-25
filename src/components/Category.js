import React from "react";
import css from "../modular-css/Body.module.css";

const Category = ({ data }) => {
    const categories = data.map((category, index) => <option key={category.id}>{index < 9 ? `0${index + 1}` : index + 1}- {category.category === '' ? 'Random' : category.category}</option>)
    return <select id={css.categories}>
        <option>Category</option>
        {categories}
    </select>
}

export default Category;