import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header header--scrolled">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <img src="src/assets/images/portfolio/portfolio_logo.svg" alt="" />
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="#hero" className="navbar-link">Home</a></li>
                        <li className="navbar-item"><a href = "#about" className="navbar-link">About</a></li>
                        <li className="navbar-item"><a href = "#experiences" className="navbar-link">Experiences</a></li>
                        <li className="navbar-item"><a href = "#skills" className="navbar-link">Skills</a></li>
                        <li className="navbar-item"><a href = "#projects" className="navbar-link">Projects</a></li>
                        <li className="navbar-item"><a href = "#contact" className="navbar-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;