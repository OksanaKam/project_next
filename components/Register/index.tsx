'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './styles.module.scss';

interface IFormInput {
    email: string;
    password: string;
}

const Register = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <main className={styles.register}>
            <h1 className={styles.register__title}>REGISTER FOR AN ACCOUNT</h1>
            <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.register__label}>EMAIL ADDRESS</label>
                <input className={styles.register__input} {...register("email", {required: true})} />
                <label className={styles.register__label}>PASSWORD</label>
                <input className={styles.register__input} {...register("password", {required: true})} />
                <input className={styles.register__button} type="submit" defaultValue="Submit" />
            </form>
        </main>
    );
}

export default Register;