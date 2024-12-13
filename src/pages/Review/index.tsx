import { SubmitHandler, useForm } from "react-hook-form";
import style from './style.module.css';

type FprmType = {
    name: string;
    email: string;
    category: string
}

const Review = () => {

    const {register, handleSubmit, formState: {errors} } = useForm<FprmType>();
    console.log(register);

    const onSubmit: SubmitHandler<FprmType> = (data) => {
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <label>Ваше имя: </label>
            <input placeholder="Name" type="text" {...register('name', {
                    required: {
                        value: true,
                        message: 'Обязательное поле!'
                    },
                    minLength: {
                    value: 3,
                    message: "В поле с именем недостаточно символов!",
                }})}/>
                {errors.name && <p>{errors.name.message}</p>}

            <label htmlFor="textBlock">Расскажите: </label>
            <textarea id="textBlock" name="story" placeholder="write text"></textarea>
            <input className={style.button} type="submit" />
        </form>
    );
};

export default Review;