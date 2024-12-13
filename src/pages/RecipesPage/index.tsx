import Recipes from '../../components/Recipes';
import style from './style.module.css'

const RecipesPage = () => {
    return (
        <div className={style.container}>
            <h1>Explore Recipes ...</h1>
            <Recipes />
        </div>
    );
};

export default RecipesPage;