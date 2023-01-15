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

    const getItemsInCartById = (id) => {
        const cartItem = cartData.find((x) => x._id == id);
        
        return cartItem ? cartItem.counter : 0;
    };

    const ctx = {
        addToCart,
        products,
        cartData,
        getItemsInCartById,
    };

    return (
        <ShopContext.Provider value={ctx}>
            {props.children}
        </ShopContext.Provider>
    );
};
