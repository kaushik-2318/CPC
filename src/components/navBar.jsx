import React, { useState } from 'react'
import './CSS/navbar.css'
import Menu from '../assets/menu-fill.png'
import Close from '../assets/close-fill.png'

function navBar() {
    const [sidepanel, setsidepanel] = useState(false);
    const toggle = () => {
        setsidepanel(!sidepanel);
    };

    return (
        <>
            <nav>
                <div className='side_button'>
                    <img src={!sidepanel ? Menu : Close} alt="Button" onClick={toggle} />
                </div>
                <div className='logo'>
                    <h1>LOGO</h1>
                </div>

                <div className='link'>
                    <ul className='link_list'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>

            <div className='main_box'>
                {/* <div className="sidebar_menu" style={{ width: sidepanel ? "40%" : "0%" }}> */}
                <div className="sidebar_menu" style={{ left: sidepanel ? "0px" : "-280px" }}>
                    <ul className="menu" >
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>

    )
}
export default navBar
