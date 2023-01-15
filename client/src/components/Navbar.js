import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const isActive = ({ isActive }) => (isActive ? styles.active : '');

    return (
        <nav className={styles.navbar} role="navigation">
            <div className={styles.links}>
                <NavLink className={isActive} to="/">
                    Shop
                </NavLink>
                <NavLink to="cart" className={isActive}>
                    <ShoppingCart className={styles.cart} size={40} />
                </NavLink>
            </div>
        </nav>
    );
};
