import { CartItem } from './CartItem';
import styles from './Cart.module.css';

export const Cart = () => {
    return (
        <div className={styles.cart}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className={styles.cart}>
                <CartItem />
            </div>

            <div className={styles.checkout}>
                <p> Subtotal: $4000 </p>
                <button>Continue Shopping</button>
                <button>Checkout</button>
            </div>

            <h1> Your Shopping Cart is Empty</h1>
        </div>
    );
};
