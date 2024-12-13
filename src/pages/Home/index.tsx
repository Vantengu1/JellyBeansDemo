import image from '../../images/main.gif';
import style from './style.module.css'

const Home = () => {
    return (
        <>
            <div className={style.home_container}>
                <img src={image} alt="#" />
                <div className={style.info}>
                    <h1>Welcome to the World of Jelly Belly:</h1>
                    <p className={style.subtitle}>A Rainbow of Flavors Awaits!</p>
                    <p className={style.text}>The User Interface of this website makes full use of the API's database, showcasing one approach to design by utilizing all the endpoints and their various options. Check out the API documentation</p>
                    <button>Click here for more info</button>
                </div>
            </div>
        </>
    );
};

export default Home;