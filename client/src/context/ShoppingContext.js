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
                .map((x) => (x._id == id ? { ...x, counter: x.counter - 1 } : x))
                .filter((x) => x.counter > 0)
        );
    };

    const updateCounter = (newCounterValue, id) => {
        setCartData((state) =>
            state.map((x) =>
                x._id == id ? { ...x, counter: newCounterValue } : x
            )
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
    };

    return (
        <ShopContext.Provider value={ctx}>
            {props.children}
        </ShopContext.Provider>
    );
};
