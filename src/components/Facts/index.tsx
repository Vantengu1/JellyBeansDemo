import style from "./style.module.css";
import Fact from "./Fact";
import { FactData } from "../../types/bean";
import { useEffect, useState } from "react";


const Facts= () => {

    const [initialFact, setInitialFact] = useState<null | FactData[]>(null);

    const [updateFact, setUpdateFact] = useState<null | FactData[]>(null);

    const [isLoading, setIsLoading] = useState(false); //создаём сосотояние чтобы показать что загрузка идёт
    const [isError, setIsError] = useState(false) //создаём состояние извещающее об ошибке

    const getFact = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/facts?pageIndex=1&pageSize=80");
            const data = await req.json();
            setIsLoading(false);
            setInitialFact(data.items);
            setUpdateFact(data.items);
        }
        catch (error) {
            console.log("ERROR->", error);
            setIsLoading(false); //если падает запрос, то сообщение о загрузке пропадает
            setIsError(true); //если падает запрос, то показывается ошибка
        }
    };

    useEffect(() => {
        getFact();
    }, [])

    return(
        <div className={style.container}>
            {isLoading && <p>...loading</p>} {/* если значение isLoading будет true (&&), тогда выводим страку <p>...loading</p> */}
            {isError && <p>перезагрузите страницу!</p>}  {/* если значение isError будет true (&&), тогда выводим страку <p>перезагрузите страницу!</p> */}
            {updateFact && updateFact.map((fact) => <Fact data = {fact} key = {fact.factId} />)}
        </div>
    );
};

export default Facts;