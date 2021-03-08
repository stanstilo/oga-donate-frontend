import React from 'react'
import Navbar from './Navbar'
import MenuToggle from './MenuToggle'

const Toolbar = () => {
    return (
        <header className='toolbar'>
            <MenuToggle/>
            <Navbar/>
        </header>
    )
}

export default Toolbar
