import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useBasketCardActions, useBasketCart } from '../../provider/BasketCartProvider'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { round10 } from '../../utils/roundNumber';
import dataIr from '../../data/ir.json'
import './basketCheckOut.scss'

function BasketCheckOut() {

    const basketCartData = useBasketCart()
    const { deleteToBasketCart } = useBasketCardActions()


    const render = () => {
        let value = "";

        if (basketCartData.length > 0) {
            value = basketCartData.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='cartData'>
                        <div className='cartDataImg'>
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                        <div className='cartDataDescription'>
                            <p>{item.title}</p>
                            <h5>${item.price}</h5>
                            <span>x{item.qty}</span>
                        </div>
                    </div>
                    <h3 className='close' onClick={() => deleteToBasketCart(item)}>X</h3>
                </div>
            ))
        }

        return value
    }

    const totalPrice = basketCartData.reduce((acc, item) => acc + item.qty * round10(item.price, -1), 0);


    return (
        <div className='basketCheckOut'>
            <h2 className='title'>Cart</h2>
            {render()}
            <div className='basketTotal'>
                <h4 className='basketTotalTitle'>Total</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                    <h1 className='basketTotalPrice'>${totalPrice}</h1>
                    <Link className='basketTotalCheckOut' to="/information">Complete Your Info <ArrowForwardIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default BasketCheckOut
