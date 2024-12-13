import { FC } from "react";
import style from "./style.module.css"
import { CombinationData } from "../../../types/bean";
import { Link } from "react-router-dom";

type Props = {
    data : CombinationData
}

const Combination : FC<Props>= ({data}) => {
    return(
        <Link to={`/combination/${data.combinationId}`} className={style.card}>
            <h2>{data.name}</h2>
            <p>{data.tag}</p>
        </Link>
    );
};

export default Combination;