import { FC } from "react";
import style from "./style.module.css"
import { HistoryData } from "../../../types/bean";
import { Link } from "react-router-dom";

type Props = {
    data : HistoryData
}

const History : FC<Props>= ({data}) => {
    return(
        <Link to={`/history/${data.mileStoneId}`} className={style.card}>
            <h2>{data.year}</h2>
            <div>
                <p>{data.description}</p>
                <a href="#">{'>'}</a>
            </div>
        </Link>
    );
};

export default History;