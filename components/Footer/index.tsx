import Link from "next/link";
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.header}>
            <Link href="/works">Works</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </footer>
    );
}

export default Footer;