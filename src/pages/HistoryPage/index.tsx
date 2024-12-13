import Histories from '../../components/Histores';
import style from './style.module.css';


const HistoryPage  = () => {
    return (
        <div className={style.container}>
            <h1>Explore Combinations ...</h1>
            <Histories />
        </div>
    );
};

export default HistoryPage ;