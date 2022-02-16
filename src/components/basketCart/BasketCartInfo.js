import React from 'react'
import { useBasketCardActions } from '../../provider/BasketCartProvider'
import './basketCartInfo.scss'

function BasketCartInfo({ item }) {

    const { incrementQty, decrementQty, deleteToBasketCart } = useBasketCardActions()

    return (
        <div className='basketCartInfo'>
            <div className='basketImage'>
                <img
                    src={item.image}
                    alt={item.title}
                />
            </div>
            <div className='basketInfoDescription'>
                <h2>{item.title}</h2>
                <h3>{item.price} $</h3>
                <div className='manageQty'>
                    <button onClick={() => incrementQty(item.id)}>+</button>
                    <h3>x {item.qty}</h3>
                    {item.qty >= 1 ? (
                        <button onClick={() => decrementQty(item)}>-</button>
                    ) : (
                        <button style={{ background: 'red', color: '#fff', padding: '7px', width: '80px' }} onClick={() => deleteToBasketCart(item)}>delete</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BasketCartInfo
