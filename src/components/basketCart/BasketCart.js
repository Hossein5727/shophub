import React from 'react'
import BasketCartInfo from './BasketCartInfo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useBasketCart } from '../../provider/BasketCartProvider'
import { Link } from 'react-router-dom'
import './basketCart.scss'
import BasketCheckOut from './BasketCheckOut';

function BasketCart() {

    const basket = useBasketCart()

    return (
        <div className='basketCart'>
            {basket.length > 0 ? (
                <>
                    <div className='basketWrapper'>
                        {basket.map(item => (
                            <BasketCartInfo
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <div className='basketCheckOut'>
                        <BasketCheckOut />
                    </div>
                </>
            ) : (
                <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>Your Basket Cart is Empty   <Link to="/shop" style={{ backgroundColor: "#E8E118", padding: "10px", borderRadius: '5px', display: 'flex', alignItems: 'center' }}><ArrowBackIcon fontSize='large' /> BACK TO SHOP </Link></h1>
            )}
        </div>
    )
}

export default BasketCart
