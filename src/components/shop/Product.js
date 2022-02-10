import React from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './product.scss'

function Product({ item }) {
    return (
        <div className='product' key={item.id}>
            <div className='productHeader'>
                <FullscreenIcon
                    className='productIcon'
                />
                <AddShoppingCartIcon
                    className='productIcon'
                />
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
