import style from './style.module.css'

const NotFound = () => {
    return (
        <div className={style.container}>
            <h1>Ops...</h1>
            <p>not found</p>
        </div>
    );
};

export default NotFound;