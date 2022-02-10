import React, { useContext, useState } from 'react'
import { ProductContext, ProductContextDispatcher } from './ProductListContext'
import ProductListContext from './ProductListContext'

function ProductListProvider({ children }) {

    const [value, setValue] = useState([])

    return (
        <ProductListContext value={value} setValue={setValue}>
            {children}
        </ProductListContext>
    )
}

export default ProductListProvider


export const useProductList = () => useContext(ProductContext);
export const useProductAction = () => {
    const pList = useContext(ProductContext)
    const setPList = useContext(ProductContextDispatcher)

    const getProduct = (data) => {
        setPList(data)
    }

    return { getProduct }
}