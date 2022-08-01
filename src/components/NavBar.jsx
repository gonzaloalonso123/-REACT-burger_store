import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SliderBarData } from './SliderBarData';
import './NavBar.css';

function NavBar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <h2 className='ricoBurgers'>Rico Burguers</h2>
                <Link to="/cart" className="menu-bars right">
                    <HiIcons.HiShoppingCart onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to = '#' className = 'menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SliderBarData.map((item, index) => {
                        return (
                            <li key = {index} className = {item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;