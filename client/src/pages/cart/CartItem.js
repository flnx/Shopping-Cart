import { images } from '../../utils/importPictures';
import styles from './Cart.module.css';

export const CartItem = () => {
    return (
        <div className={styles.item}>
            <img src={images[Math.floor(Math.random() * 8) + 1]} alt="iPhone" />
            <div className={styles.description}>
                <p>iPhone</p>
                <span> Price: $5000</span>
                <div className={styles.counter}>
                    <button> - </button>
                    <input defaultValue="500" />
                    <button> + </button>
                </div>
            </div>
        </div>
    );
};
