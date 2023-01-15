import { CartItem } from './CartItem';
import styles from './Cart.module.css';

export const Cart = () => {
    return (
        <section className={styles.cart}>
            <h1>Your Cart Items</h1>
            <div>
                <CartItem />
                <CartItem />
            </div>

            <div className={styles.checkout}>
                <p> Subtotal: $4000 </p>
                <button>Continue Shopping</button>
                <button>Checkout</button>
            </div>

            <h1> Your Shopping Cart is Empty</h1>
        </section>
    );
};
