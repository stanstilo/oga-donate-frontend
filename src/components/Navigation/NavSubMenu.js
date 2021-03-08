import React from 'react'

const NavSubMenu = () => {
    return (
      <div>
        <div>
        <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Personal</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Community</a>
        </li>
        <li className="nav__submenu-item ">
          <a>NGO 0r Startup</a>
        </li>
      </ul>
      </div>

      <div>
        <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Donate item</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Donate Cash</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
      </div>
      </div>
    )
}

export default NavSubMenu
