import React from 'react';


const menuToggle = ({clicked}) => (
    <> 
        <div className = "menu-toggle" onclick={clicked}>
        <div className="menu-button" id="menu-button1"></div>
        <div className="menu-button" id="menu-button2"></div>
        <div className="menu-button" id="menu-button3"></div>
        </div>
    </>
);

export default menuToggle;