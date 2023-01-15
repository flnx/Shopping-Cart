import styles from './Shop.module.css';
import { images } from '../../utils/importPictures';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShoppingContext';

export const Item = ({ _id, productName, price, imageUrl }) => {
    const { addToCart } = useContext(ShopContext);

    const cartHandler = (e) => {
        e.preventDefault();

        addToCart({ _id, productName, price, imageUrl, counter: 1 });
    };

    return (
        <div className={styles.item}>
            <img src={images[imageUrl]} alt={productName} />
            <div className={styles.description}>
                <p className={styles.title}>{productName}</p>
                <p className={styles.price}>${price}</p>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={cartHandler}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};
