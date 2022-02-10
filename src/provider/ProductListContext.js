import { createContext } from "react"

export const ProductContext = createContext()
export const ProductContextDispatcher = createContext()


function ProductListContext({ children, value, setValue }) {
    return (
        <ProductContext.Provider value={value}>
            <ProductContextDispatcher.Provider value={setValue}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}

export default ProductListContext
