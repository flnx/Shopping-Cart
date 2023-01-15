import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ShopContext = createContext([]);

export const ShoppingContextProvider = (props) => {
    const products = useFetch('http://localhost:3030/jsonstore/products/');

    const [cartData, setCartData] = useState(() => {
        const localData = localStorage.getItem('userCart');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('userCart', JSON.stringify(cartData));
    }, [cartData]);

    const addToCart = (newItem) => {
        const newState = [...cartData];
        const itemInCart = newState.find((x) => x._id === newItem._id);

        itemInCart ? itemInCart.counter++ : newState.push(newItem);

        setCartData(() => newState);
    };

    const removeFromCart = (id) => {
        setCartData((state) =>
            state
                .map((x) => x._id == id ? { ...x, counter: x.counter - 1 } : x)
                .filter((x) => x.counter > 0)
        );
    };

    const emptyCartOnCheckOut = () => {
        setCartData(() => []);
    }

    const updateCounter = (value, id) => {
        if (Number.isInteger(value) == false || value < 0) return

        setCartData((state) =>
            state
                .map((x) => (x._id == id ? { ...x, counter: value } : x))
                .filter((x) => x.counter != 0)
        );
    };

    const checkProductCounter = (id) => {
        const cartItem = cartData.find((x) => x._id == id);
        
        return cartItem ? cartItem.counter : 0;
    };

    const ctx = {
        addToCart,
        products,
        cartData,
        checkProductCounter,
        updateCounter,
        removeFromCart,
        emptyCartOnCheckOut
    };

    return (
        <ShopContext.Provider value={ctx}>
            {props.children}
        </ShopContext.Provider>
    );
};
