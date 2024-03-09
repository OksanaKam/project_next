import styles from './styles.module.scss';
import Image from 'next/image';
import avatar from '../../assets/images/avatar.png'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__info}>
                <h1 className={styles.about__title}>Hi, I am John, Creative Technologist</h1>
                <p className={styles.about__description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className={styles.about__resume} type='button'>Download Resume</button>
            </div>
            <Image className={styles.about__avatar} src={avatar} alt='profile photo' />
        </section>
    );
}

export default About;