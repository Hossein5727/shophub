import React, { useEffect, useState } from 'react'
import { getOneDataHtppServices } from '../../services/getOneDataHtppServices'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import './productInfo.scss'
import { CircularProgress } from '@mui/material';

function ProductInfo() {

    const [productData, setProductData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

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
                    <h2>{productData.title}</h2>
                    <p>{productData.description}</p>
                    <p>Price: {productData.price}$</p>
                    <button>Add to ShoppingList</button>
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
