import React, { useState } from 'react';
import logo from './assets/RR-LOGO-PURPLE.png';
import "./Header.css";


export default function Headersection() {
    const [isNavbarActive, setIsNavbarActive] = useState(false);  
    const toggleNavbar = () => {
          setIsNavbarActive(prevState => !prevState);
    }
    return (
        <header className="header">
            <a href="#home" className="logo">
                <img src={logo} alt="Logo" height="50" width="50"/>
            </a>
            <div id="menu-icon" onClick={toggleNavbar}>&#9776;</div>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                <a href="#home" className="active">Home</a>
                <a href="#education">Education</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}