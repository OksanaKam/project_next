import { FC } from 'react';
import styles from './styles.module.scss';
import { IProps } from './interface';

const PostCard: FC<IProps> = ({ post }) => {
    return (
        <div className={styles.post}>
            <h3 className={styles.post__title}>{post.title}</h3>
            <div className={styles.post__group}>
                <p className={styles.post__info}>{post.date}</p>
                <p className={styles.post__info}>{post.theme}</p>
            </div>
            <p className={styles.post__text}>{post.text}</p>
        </div>
    );
}

export default PostCard;