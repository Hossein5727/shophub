import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';

export const BasketContext = createContext();
export const BasketContextDispatcher = createContext();

export const NumberProductContext = createContext();
export const NumberProductContextDispatcher = createContext();


function BasketCartProvider({ children }) {

    const [basketCart, setBasketCart] = useState([])
    const [numberProduct, setNumberProduct] = useState(0)

    return (
        <BasketContext.Provider value={basketCart}>
            <BasketContextDispatcher.Provider value={setBasketCart}>
                <NumberProductContext.Provider value={numberProduct}>
                    <NumberProductContextDispatcher.Provider value={setNumberProduct}>
                        {children}
                    </NumberProductContextDispatcher.Provider>
                </NumberProductContext.Provider>
            </BasketContextDispatcher.Provider>
        </BasketContext.Provider>
    )
}

export default BasketCartProvider


export const useBasketCart = () => useContext(BasketContext);
export const useNumberProduct = () => useContext(NumberProductContext);

export const useBasketCardActions = () => {
    const basket = useContext(BasketContext)
    const setBasket = useContext(BasketContextDispatcher)
    const number = useContext(NumberProductContext)
    const setNumber = useContext(NumberProductContextDispatcher)

    const addToBasketCart = (data) => {
        // setBasket([...basket, data])
        const clone = [...basket]

        const selectedIndex = clone.findIndex(p => p.id === data.id)

        if (selectedIndex < 0) {
            clone.push({ ...data, qty: 1 })
            toast.dark("added cart", { icon: "🚀" })
            setBasket([...clone])
            setNumber(num => num + 1)
        }
    }

    const deleteToBasketCart = (data) => {
        const clone = [...basket]

        const filterProduct = clone.filter(p => p.id !== data.id)
        toast.dark("deleted cart", { icon: "😭" })
        setBasket(filterProduct)
        setNumber(num => num - 1)
    }

    const incrementQty = (id) => {
        const clone = [...basket]

        const selectedIndex = clone.find(basket => basket.id === id)
        selectedIndex.qty++
        setBasket([...clone])
    }

    const decrementQty = (item) => {
        const clone = [...basket]

        const selectedIndex = clone.find(basket => basket.id === item.id)
        selectedIndex.qty--
        setBasket([...clone])
    }

    return { addToBasketCart, deleteToBasketCart, incrementQty,decrementQty }
};