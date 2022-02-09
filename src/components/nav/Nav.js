import { NavLink } from 'react-router-dom'
import { linkDataNav } from '../../data/linkDataNav'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge } from '@mui/material'
import './nav.scss'

function Nav() {
    return (
        <nav className='nav'>
            <div className='nav_wrapper'>
                <div className='nav_logo'>
                    <h1>shophub</h1>
                </div>
                <div className='nav_link'>
                    {linkDataNav.map(item => (
                        <NavLink className={(navLink) => navLink.isActive ? "active" : "linkItem"} to={item.to} key={item.id}>{item.title}</NavLink>
                    ))}
                </div>
                <div className='shopCart'>
                    <Badge badgeContent={0} color="warning" showZero>
                        <ShoppingBagIcon />
                    </Badge>
                </div>
            </div>
        </nav>
    )
}

export default Nav
