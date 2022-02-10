import React from 'react'
import welcomeImg from '../../assets/img/landing-shop.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './landing.scss'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='landing'>
            <div className='landing_wrapper'>
                <div className='left_column'>
                    <h1 className='left_columnTilte'>
                        Every Purchase Will Be Made With Pleasure
                    </h1>
                    <p>Buying and selling of goods or serivces using the internet.</p>
                    <button><Link to="/shop">Start Shopping</Link> <span> <NavigateNextIcon /> </span></button>
                </div>
                <div className='right_column'>
                    <img
                        src={welcomeImg}
                        alt='landing-shop'
                        loading='lazy'
                    />
                    <div></div>
                    <h1>WELCOME TO SHOPHUP</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing
