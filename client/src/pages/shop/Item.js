import styles from './Shop.module.css';
import { images } from '../../utils/importPictures';

export const Item = () => {
    return (
        <div className={styles.item}>
            <img
                src={images[Math.floor(Math.random() * 8) + 1]}
                alt="iPhone"
            />
            <div className={styles.description}>
                <p className={styles.title}>Iphone</p>
                <p className={styles.price}>$555</p>
                <button type="button" className={styles.btn}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};
