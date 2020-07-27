import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <nav>
            <div id="nav-left">
                <ul>
                    <li><a href="#main-left">HOME</a></li>
                    <li><a href="#skills-section">SKILLS</a></li>
                </ul>
            </div>
            <div id="navbar-name">
                <a href="#"><h1>ANANT JAWANDA</h1></a>
            </div>
            <div id="nav-right">
                <ul>
                    <li><a href="#projects-section">PROJECTS</a></li>
                    <li><a href="#contact-section">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;