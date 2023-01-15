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
        const upd = cartData.map((x) => ({ ...x }));
        const find = upd.find((x) => x._id === newItem._id);

        if (find) {
            find.counter += 1;
        } else {
            upd.push(newItem);
        }

        setCartData(() => upd);
    };

    const ctx = {
        addToCart,
        products,
        cartData,
    };

    return (
        <ShopContext.Provider value={ctx}>
            {props.children}
        </ShopContext.Provider>
    );
};
