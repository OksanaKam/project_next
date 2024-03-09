import styles from './styles.module.scss';
import { initialPosts } from '../../utils/constants'
import PostCard from '../PostCard';

const Posts = () => {
    return (
        <section className={styles.posts}>
            <div className={styles.posts__section}>
                <div className={styles.posts__group}>
                    <h2 className={styles.posts__title}>Recent posts</h2>
                    <a className={styles.posts__link} href='#'>View all</a>
                </div>
                <div className={styles.posts__group}>
                    {initialPosts.map((post) => {
                        return (
                            <PostCard key={post.id} post={post} />
                        )
                    })}
               </div>
            </div>
        </section>
    );
}

export default Posts;