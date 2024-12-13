import style from "./style.module.css";
import History from "./History";
import { HistoryData } from "../../types/bean";
import { useEffect, useState } from "react";


const Histories= () => {

    const [updateHistory, setUpdateHistory] = useState<null | HistoryData[]>(null);

    const [isLoading, setIsLoading] = useState(false); //создаём сосотояние чтобы показать что загрузка идёт
    const [isError, setIsError] = useState(false) //создаём состояние извещающее об ошибке

    const getHistory = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=1&pageSize=50");
            const data = await req.json();
            setIsLoading(false);
            setUpdateHistory(data.items);
        }
        catch (error) {
            console.log("ERROR->", error);
            setIsLoading(false); //если падает запрос, то сообщение о загрузке пропадает
            setIsError(true); //если падает запрос, то показывается ошибка
        }
    };

    useEffect(() => {
        getHistory();
    }, [])

    return(
        <div className={style.container}>
            {isLoading && <p>...loading</p>} {/* если значение isLoading будет true (&&), тогда выводим страку <p>...loading</p> */}
            {isError && <p>перезагрузите страницу!</p>}  {/* если значение isError будет true (&&), тогда выводим страку <p>перезагрузите страницу!</p> */}
            {updateHistory && updateHistory.map((history) => <History data = {history} key = {history.mileStoneId} />)}
        </div>
    );
};

export default Histories;