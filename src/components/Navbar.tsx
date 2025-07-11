import logo from '../assets/images/RoshkoLogo.svg'
import { useState } from "react";
import { Link } from 'react-router-dom';

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
                    <li onClick={() => sidebarSet(hideStyle)}><a><i className="fa-solid fa-x"></i></a></li>
                    <li onClick={() => sidebarSet(hideStyle)}><Link to="/">Начало</Link></li>
                    <li onClick={() => sidebarSet(hideStyle)}><Link to="/about">За мен</Link></li>
                    <li onClick={() => sidebarSet(hideStyle)}><Link to="/book">Резервирай</Link></li>
                    <li onClick={() => sidebarSet(hideStyle)}><Link to="/gallery">Галерия</Link></li>
                    <li onClick={() => sidebarSet(hideStyle)}><Link to="/contact">Контакт</Link></li>
                </ul>
                <ul>
                    <li><Link to="/"><img src={logo}></img></Link></li>
                    <li className="hideOnMobile"><Link to="/about">За мен</Link></li>
                    <li className="hideOnMobile"><Link to="/book">Резервирай</Link></li>
                    <li className="hideOnMobile"><Link to="/gallery">Галерия</Link></li>
                    <li className="hideOnMobile"><Link to="/contact">Контакти</Link></li>
                    <li className="menuBtn" onClick={() => sidebarSet(showStyle)}><a><i className="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;