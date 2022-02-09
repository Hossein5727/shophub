import React from 'react'
import Nav from '../components/nav/Nav'

function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default Layout
