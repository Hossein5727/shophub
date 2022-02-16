import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBasketCardActions, useBasketCart } from '../../provider/BasketCartProvider';
import './product.scss'

function Product({ item }) {

    const shopRef = useRef()
    const basket = useBasketCart()
    const { addToBasketCart, deleteToBasketCart } = useBasketCardActions()

    const clickHandler = () => {
        addToBasketCart(item)
    }

    const deleteHandler = () => {
        deleteToBasketCart(item)
    }

    return (
        <div className='product' key={item.id}>
            <div className='productHeader'>
                <Link to={`/shop/product-info/${item.id}`}>
                    <FullscreenIcon
                        className='productIcon'
                    />
                </Link>
                {basket.find(basket => basket.id === item.id) ?
                    (
                        <DeleteIcon
                            className='productIcon'
                            onClick={deleteHandler}
                        />
                    )
                    : (
                        <AddShoppingCartIcon
                            className='productIcon'
                            onClick={clickHandler}
                            ref={shopRef}
                        />
                    )}
            </div>
            <div className='productContent'>
                <img
                    src={item.image}
                    alt={item.title}
                    loading='lazy'
                />
                <div></div>
            </div>
            <div className='productFooter'>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>
        </div>
    )
}

export default Product
