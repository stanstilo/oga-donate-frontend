import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { logout } from '../actions/auth';
import Logo from "../../assets/images/logo.jpeg";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar d-none d-md-flex navbar-light">
        <div className="logo nav-left">
          <img src={Logo} alt="log" className="logo" />
        </div>
        <div>
          <ul className="nav-center  mt-1">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/">Fund Raise</a>
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
            </li>
            <li className="nav-item">
              <a href="/app/campaigns/donate-to-fund">Donate</a>
            </li>
            <li className="nav-item">
              <a href="/">Auction</a>
            </li>
            <li className="nav-item">
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>

        <div className="__right-container">
          <ul className="bar-right mt-2">
            <li className="nav-item">
              <a href="/signup">Sign up</a>
            </li>
            <li className="nav-item">
              <a href="/signin">Login</a>
            </li>
            <li>
              <Button variant="contained" className="nav-btn text-white">
                Buy To Support
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
