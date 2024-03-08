import { FC } from "react";
import Link from "next/link";
import styles from './styles.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.header__link} href="/works">Works</Link>
            <Link className={styles.header__link} href="/blog">Blog</Link>
            <Link className={styles.header__link} href="/contact">Contact</Link>
            <Link className={styles.header__link} href="/login">Login</Link>
            <Link className={styles.header__link} href="/register">Register</Link>
        </header>
    );
};

export default Header;