import React from 'react'
import Navbar from './Navbar'
import MenuToggle from './MenuToggle'

const Toolbar = ({drawerToggleClicked}) => {
    return (
        <header className='toolbar'>
            <MenuToggle clicked={drawerToggleClicked}/>
            <Navbar/>
        </header>
    )
}

export default Toolbar
