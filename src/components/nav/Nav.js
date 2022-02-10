import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { linkDataNav } from '../../data/linkDataNav'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './nav.scss'

function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false)

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
                    <Badge badgeContent={0} color="warning" showZero>
                        <ShoppingBagIcon className='shopIcon' />
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
