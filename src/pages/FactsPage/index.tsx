import Facts from "../../components/Facts";
import style from './style.module.css';

const FactsPage = () => {
    return (
        <div className={style.container}>
            <h1>Explore Facts ...</h1>
            <Facts />
        </div>
    );
};

export default FactsPage;