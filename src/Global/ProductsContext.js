import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../Services'
import Loading from '../components/Loading'
export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        async function loadProducts() {
            const response = await getProducts();
            if (response.status === 200) {
                setProducts(response.data.orders)
            }
            setIsLoading(false)
            return response;
        }
        loadProducts()
    }, [])

    if (isLoading)
        return <Loading />

    if (!products.length)
        return 'usted aun no tiene productos!'


    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;