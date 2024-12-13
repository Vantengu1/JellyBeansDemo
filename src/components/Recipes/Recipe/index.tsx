import { FC } from "react";
import style from "./style.module.css"
import { RecipeData } from "../../../types/bean";
import { Link } from "react-router-dom";

type Props = {
    data : RecipeData;
}

const Recipe : FC<Props>= ({data}) => {
    return(
        <Link to={`/recipe/${data.recipeId}`} className={style.card}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>Make:{data.makingAmount}</p>
            <p>Total Time:{data.totalTime}</p>
            <a href="#">check out this recipes {">"}</a>
        </Link>
    );
};

export default Recipe;