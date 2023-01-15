import { useContext } from 'react';
import { ShopContext } from '../../context/ShoppingContext';
import { images } from '../../utils/importPictures';

import styles from './Cart.module.css';

export const CartItem = ({ _id, productName, price, imageUrl }) => {
    const { 
         addToCart,
         checkProductCounter, 
         updateCounter, 
         removeFromCart 
        } = useContext(ShopContext);
        
    const counter = checkProductCounter(_id);

    const cartHandler = (e) => {
        e.preventDefault();

        addToCart({ _id, productName, price, imageUrl, counter: 1 });
    };

    const removeHandler = () => {
        removeFromCart(_id);
    }

    return (
        <div className={styles.item}>
            <img src={images[imageUrl]} alt="iPhone" />
            <div className={styles.description}>
                <p>{productName}</p>
                <span> Price: ${price}</span>
                <div className={styles.counter}>
                    <button onClick={removeHandler}> - </button>
                    <input
                        value={counter}
                        onChange={(e) =>
                            updateCounter(Number(e.target.value), _id)
                        }
                    />
                    <button onClick={cartHandler}> + </button>
                </div>
            </div>
        </div>
    );
};
