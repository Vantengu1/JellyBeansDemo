import style from "./style.module.css";
import Recipe from "./Recipe";
import { RecipeData } from "../../types/bean";
import { useEffect, useState } from "react";


const Recipes= () => {

    const [updateRecipe, setUpdateRecipe] = useState<null | RecipeData[]>(null);

    const [isLoading, setIsLoading] = useState(false); //создаём сосотояние чтобы показать что загрузка идёт
    const [isError, setIsError] = useState(false) //создаём состояние извещающее об ошибке

    const getRecipe = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=1&pageSize=50");
            const data = await req.json();
            setIsLoading(false);
            setUpdateRecipe(data.items);
        }
        catch (error) {
            console.log("ERROR->", error);
            setIsLoading(false); //если падает запрос, то сообщение о загрузке пропадает
            setIsError(true); //если падает запрос, то показывается ошибка
        }
    };

    useEffect(() => {
        getRecipe();
    }, [])

    return(
        <div className={style.container}>
            {isLoading && <p>...loading</p>} {/* если значение isLoading будет true (&&), тогда выводим страку <p>...loading</p> */}
            {isError && <p>перезагрузите страницу!</p>}  {/* если значение isError будет true (&&), тогда выводим страку <p>перезагрузите страницу!</p> */}
            {updateRecipe && updateRecipe.map((recipe) => <Recipe data = {recipe} key = {recipe.recipeId} />)}
        </div>
    );
};

export default Recipes;