import style from "./style.module.css";
import Combination from "./Combination";
import { CombinationData } from "../../types/bean";
import { useEffect, useState } from "react";


const Combinations= () => {

    const [initialCombination, setInitialCombination] = useState<null | CombinationData[]>(null);

    const [updateCombination, setUpdateCombination] = useState<null | CombinationData[]>(null);

    const [isLoading, setIsLoading] = useState(false); //создаём сосотояние чтобы показать что загрузка идёт
    const [isError, setIsError] = useState(false) //создаём состояние извещающее об ошибке

    const getCombination = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=1&pageSize=50");
            const data = await req.json();
            setIsLoading(false);
            setInitialCombination(data.items);
            setUpdateCombination(data.items);
        }
        catch (error) {
            console.log("ERROR->", error);
            setIsLoading(false); //если падает запрос, то сообщение о загрузке пропадает
            setIsError(true); //если падает запрос, то показывается ошибка
        }
    };

    useEffect(() => {
        getCombination();
    }, [])

    return(
        <div className={style.container}>
            {isLoading && <p>...loading</p>} {/* если значение isLoading будет true (&&), тогда выводим страку <p>...loading</p> */}
            {isError && <p>перезагрузите страницу!</p>}  {/* если значение isError будет true (&&), тогда выводим страку <p>перезагрузите страницу!</p> */}
            {updateCombination && updateCombination.map((combination) => <Combination data = {combination} key = {combination.combinationId} />)}
        </div>
    );
};

export default Combinations;