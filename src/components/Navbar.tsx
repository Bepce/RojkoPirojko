import logo from '../assets/images/RojkoLogo.svg'
import { useState } from "react";

function Navbar() {

    const hideStyle = {
        display: 'none',
        transform: 'translateX(100%)'
    }

    const showStyle = {
        display: 'flex',
        transition: 'transform 0.4s ease-in-out',
        transform: 'translateX(0%)'
    }

    const [open, sidebarSet] = useState(hideStyle);


    return (
        <div className='header'>
            <nav className="navbar">
                <ul className="sidebar" style={open}>
                    <li onClick={() => sidebarSet(hideStyle)}><a href="#"><i className="fa-solid fa-x"></i></a></li>
                    <li onClick={() => sidebarSet(hideStyle)}><a href="#about">About</a></li>
                    <li onClick={() => sidebarSet(hideStyle)}><a href="#book">Book</a></li>
                    <li onClick={() => sidebarSet(hideStyle)}><a href="#gallery">Gallery</a></li>
                    <li onClick={() => sidebarSet(hideStyle)}><a href="#contacts">Contacts</a></li>
                </ul>
                <ul>
                    <li><a href="#"><img src={logo}></img></a></li>
                    <li className="hideOnMobile"><a href="#about">About</a></li>
                    <li className="hideOnMobile"><a href="#book">Book</a></li>
                    <li className="hideOnMobile"><a href="#gallery">Gallery</a></li>
                    <li className="hideOnMobile"><a href="#contacts">Contacts</a></li>
                    <li className="menuBtn" onClick={() => sidebarSet(showStyle)}><a href="#"><i className="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;