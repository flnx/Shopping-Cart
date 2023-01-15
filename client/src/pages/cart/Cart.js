import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShoppingContext';
import { CartItem } from './CartItem';

import styles from './Cart.module.css';

export const Cart = () => {
    const { cartData, emptyCartOnCheckOut } = useContext(ShopContext);

    const navigate = useNavigate();

    const totalSum = cartData.reduce(
        (acc, item) => acc + item.counter * item.price,
        0
    );
        
    const checkOutHandler = () => {
        emptyCartOnCheckOut();
    }


    return (
        <section className={styles.cart}>
            <h1>Your Cart Items</h1>
            {cartData.length > 0 ? (
                <>
                    <div>
                        {cartData.map((x) => (
                            <CartItem {...x} key={x._id} />
                        ))}
                    </div>

                    <div className={styles.checkout}>
                        <p> Subtotal: ${totalSum.toFixed(2)} </p>
                        <button onClick={() => navigate('/')}>
                            Continue Shopping
                        </button>
                        <button onClick={checkOutHandler}>
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
        </section>
    );
};
