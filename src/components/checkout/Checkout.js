import React, { useState } from 'react'
import BankCard from "react-credit-cards"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { QrCodeSharp } from '@mui/icons-material'
import { toast } from 'react-toastify'
import 'react-credit-cards/es/styles-compiled.css';
import './checkout.scss'
import { useBasketCardActions } from '../../provider/BasketCartProvider';
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const [cartData, setCartData] = useState({
        cvc: '',
        expiry: '',
        name: '',
        number: '',
    })

    const { deleteAllCarts } = useBasketCardActions()

    let navigate = useNavigate()

    const inputData = [
        { id: 1, value: cartData.name, name: 'name', label: 'name', icon: <CreditCardIcon /> },
        { id: 2, value: cartData.number, name: 'number', label: 'number card', icon: <LooksOneIcon /> },
        { id: 3, value: cartData.expiry, name: 'expiry', label: 'expiry', icon: <DateRangeIcon /> },
        { id: 4, value: cartData.cvc, name: 'cvc', label: 'cvc', icon: <QrCodeSharp /> },
    ]

    const handleChange = (e) => {
        setCartData({ ...cartData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('Ok')
        deleteAllCarts()
        navigate('/')
    }

    return (
        <div className='checkout'>
            <div className='cart'>
                <BankCard
                    cvc={cartData.cvc}
                    expiry={cartData.expiry}
                    name={cartData.name}
                    number={cartData.number}
                />
            </div>
            <div className='inputs'>
                <form onSubmit={handleSubmit}>
                    {inputData.map(item => (
                        <div key={item.id}>
                            {item.icon}
                            <input
                                type="text"
                                name={item.name}
                                value={item.value}
                                onChange={handleChange}
                                placeholder={item.label}
                                required
                            />
                        </div>
                    ))}
                    <button type='submit'>Paymant</button>
                </form>
            </div>
        </div >
    )
}

export default Checkout
