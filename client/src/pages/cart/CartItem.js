import { images } from '../../utils/importPictures';
import styles from './Cart.module.css';

export const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <img src={images[Math.floor(Math.random() * 8) + 1]} alt="iPhone" />
            <div className={styles.description}>
                <p>
                    <b>iPhone</b>
                </p>
                <p> Price: $5000</p>
                <div className={styles.countHandler}>
                    <button> - </button>
                    <input defaultValue="500" />
                    <button> + </button>
                </div>
            </div>
        </div>
    );
};
