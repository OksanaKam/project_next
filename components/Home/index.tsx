import styles from './styles.module.scss';
import Image from 'next/image';
import avatar from '../../assets/images/avatar.png'

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.home__info}>
                <h1 className={styles.home__title}>Hi, I am John, Creative Technologist</h1>
                <p className={styles.home__description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className={styles.home__resume} type='button'>Download Resume</button>
            </div>
            <Image className={styles.home__avatar} src={avatar} alt='profile photo' />
        </section>
    );
}

export default Home;