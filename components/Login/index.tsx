'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './styles.module.scss';

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <main className={styles.login}>
            <h1 className={styles.login__title}>WELCOME BACK</h1>
            <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.login__label}>EMAIL ADDRESS</label>
                <input className={styles.login__input} {...register("email", {required: true})} />
                <label className={styles.login__label}>PASSWORD</label>
                <input className={styles.login__input} {...register("password", {required: true})} />
                <input className={styles.login__button} type="submit" defaultValue="SIGN IN" />
            </form>
        </main>
    );
}

export default Login;