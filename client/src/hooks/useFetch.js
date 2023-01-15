import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(Object.values(data));
            });
    }, [url]);

    return products;
};
