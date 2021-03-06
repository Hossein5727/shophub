import React, { useEffect, useState } from 'react'
import { getOneDataHtppServices } from '../../services/getOneDataHtppServices'
import { CircularProgress } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import './productInfo.scss'
import { useBasketCardActions, useBasketCart } from '../../provider/BasketCartProvider';


function ProductInfo() {

    const [productData, setProductData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const basket = useBasketCart()
    const { addToBasketCart } = useBasketCardActions()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const { data } = await getOneDataHtppServices(params.id)
            setProductData(data)
            console.log(productData);
            setIsLoading(false)
        } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }

    const render = () => {
        let value = "";

        if (isLoading) {
            value = <CircularProgress />
        }

        if (productData) {
            value = <div className='productinfoDesc'>
                <div className='p_img'>
                    <img
                        src={productData.image}
                        alt={productData.title}
                    />
                </div>
                <div className='p_desc'>
                    <h2 className='title'>{productData.title}</h2>
                    <p className='description'>{productData.description}</p>
                    <p>Price: {productData.price}$</p>
                    {!basket.find(basket => basket.id === productData.id) && (
                        <button onClick={() => addToBasketCart(productData)}>Add to ShoppingList <AddShoppingCartIcon /></button>
                    )}
                </div>
            </div>
        }

        return value
    }

    return (
        <div className='productInfo'>
            <div className='info animate__animated  animate__bounceIn'>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', paddingBottom: '8px' }}>
                    <h1>Product Info</h1>
                    <Link to="/shop">X</Link>
                </div>
                {render()}
            </div>
        </div>
    )
}

export default ProductInfo
