import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { linkDataNav } from '../../data/linkDataNav'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './nav.scss'
import { useBasketCart, useNumberProduct } from '../../provider/BasketCartProvider';
import { round10 } from '../../utils/roundNumber';

function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const numberProduct = useNumberProduct()
    const basketCartData = useBasketCart()


    const totalPrice = basketCartData.reduce((acc, item) => acc + item.qty * round10(item.price, -1), 0);


    return (
        <nav className='nav'>
            <div className='nav_wrapper'>
                <div className='nav_logo'>
                    <h1>shophub</h1>
                </div>
                <div className={toggleMenu ? "nav_linkResponsive animate__animated  animate__fadeInRight" : "nav_link"}>
                    {linkDataNav.map(item => (
                        <NavLink onClick={() => setToggleMenu(false)} className={(navLink) => navLink.isActive ? "active" : "linkItem"} to={item.to} key={item.id}>{item.title}</NavLink>
                    ))}
                </div>
                <div className='shopCart'>
                    <h3>${totalPrice}</h3>
                    <Badge badgeContent={numberProduct} color="warning" showZero>
                        <Link to="/basket">
                            <ShoppingBagIcon className='shopIcon' />
                        </Link>
                    </Badge>
                    {!toggleMenu
                        ?
                        (<MenuIcon className='menu' onClick={() => setToggleMenu(true)} />)
                        :
                        (<CloseIcon className='close' onClick={() => setToggleMenu(false)} />)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav
