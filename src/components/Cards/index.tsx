import style from "./style.module.css";
import Card from "./Card";
import { Bean } from "../../types/bean";
import {  useEffect, useState } from "react";

const Cards = () => {

    const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null);

    const [isLoading, setIsLoading] = useState(false); //создаём сосотояние чтобы показать что загрузка идёт
    const [isError, setIsError] = useState(false) //создаём состояние извещающее об ошибке

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100");
            const data = await req.json();
            setIsLoading(false);
            setUpdateBeans(data.items);
        } 
        catch (error) {
            console.log("ERROR->", error);
            setIsLoading(false); //если падает запрос, то сообщение о загрузке пропадает
            setIsError(true); //если падает запрос, то показывается ошибка
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return(
        <div className={style.container}>
            {isLoading && <p>...loading</p>} {/* если значение isLoading будет true (&&), тогда выводим страку <p>...loading</p> */}
            {isError && <p>перезагрузите страницу!</p>}  {/* если значение isError будет true (&&), тогда выводим страку <p>перезагрузите страницу!</p> */}
            {updateBeans && updateBeans.map((bean) => <Card data = {bean} key = {bean.beanId}/>)}
        </div>
    );
};

export default Cards;