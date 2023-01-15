import styles from './Shop.module.css';
import { Item } from './Item';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShoppingContext';

export default function Shop() {
    const { products, cartData } = useContext(ShopContext);

    return (
        <div className={styles.wrapper}>
            {products.map((x) => (
                <Item {...x} key={x._id} />
            ))}
        </div>
    );
}
