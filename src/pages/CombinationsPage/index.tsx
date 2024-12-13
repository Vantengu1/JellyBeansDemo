import Combinations from "../../components/Combinations";
import style from './style.module.css';



const CombinationsPage = () => {
    return (
        <div className={style.container}>
            <h1>Explore Combinations ...</h1>
            <Combinations />
        </div>
    );
};

export default CombinationsPage;