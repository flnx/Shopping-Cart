import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShoppingContext';

export const Cart = () => {
    const { cartData } = useContext(ShopContext);

    const navigate = useNavigate();

    return (
        <section className={styles.cart}>
            <h1>Your Cart Items</h1>
            <div>
                {cartData.map((x) => (
                    <CartItem {...x} key={x._id} />
                ))}
            </div>

            <div className={styles.checkout}>
                <p> Subtotal: $4000 </p>
                <button onClick={() => navigate('/')}>Continue Shopping</button>
                <button>Checkout</button>
            </div>

            <h1> Your Shopping Cart is Empty</h1>
        </section>
    );
};
