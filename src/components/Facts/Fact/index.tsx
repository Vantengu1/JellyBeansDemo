import { FC } from "react";
import style from "./style.module.css"
import { FactData } from "../../../types/bean";
import { Link } from "react-router-dom";

type Props = {
    data : FactData
}
// interface Props {
//     title: string;
// }

const Fact : FC<Props>= ({data}) => {
    return(
        <Link to={`/FactData/${data.factId}`} className={style.card}>
            <h2>{data.factId}. {data.title}</h2>
            <p>{data.description}</p>
        </Link>
    );
};

export default Fact;