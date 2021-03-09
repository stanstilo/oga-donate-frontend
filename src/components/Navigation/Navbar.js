import React from "react";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logout } from '../actions/auth';
import Logo from "../../assets/images/logo.jpeg";
import Button from "@material-ui/core/Button";

const Navbar = ({history}) => {
  return (
    <>
      <nav className="donate__navbar">
        {/* logo */}
        <div className="nav-left">
          <img src={Logo} alt="log" className="logo" />
        </div>

        {/* nav-center */}
        <div className='navbar-center-container'>
          <ul className="navbar-center">
            <li className="nav-item">
            <NavLink
                  to="/"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                 Home
                </NavLink>
            </li>
            <li className="nav-item fund-nav">
            <NavLink
                  to="/fundraise"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Fund Raise
                </NavLink>
              <ul className="nav__submenu">
                <li className="nav__submenu-item ">
                <NavLink
                  to="/"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Personal
                </NavLink>
                </li>
                <li className="nav__submenu-item ">
                <NavLink
                  to="/community"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Community
                </NavLink>
                </li>
                <li className="nav__submenu-item ">
                <NavLink
                  to="/ngo"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  NGO
                </NavLink>

                </li>
                <li className="nav__submenu-item ">
                <NavLink
                  to="/startup"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Start up
                </NavLink>   
                </li>
              </ul>
            </li>
            <li className="nav-item donate-nav">
            <NavLink
                  to="/donate"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Donate
                </NavLink>
              <ul className="nav__submenu">
              <NavLink
                  to="/donate-cash"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Donate cash
                </NavLink>
                <li className="nav__submenu-item ">
                <NavLink
                  to="/donate-item"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Donate item
                </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
            <NavLink
                  to="/auction"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Auction
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  to="/about"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  About Us
                </NavLink>
            </li>
          </ul>
        </div>
        
        {/* right container */}
        <div className="__end-right-container">
          <div className='bar-right-col'>
            <div className='test-col'>
          <ul className="bar-right">
            <li className="nav-item">
            <NavLink
                  to="/signup"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Sign up
                </NavLink>
            </li>
            <li className="nav-item">
               <NavLink
                  to="/signin"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link"
                >
                  Login
                </NavLink>
            </li>
            <li>
              <Button variant="contained" className="nav-btn text-white">
                Buy To Support
              </Button>
            </li>
          </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};



export default withRouter(Navbar);
