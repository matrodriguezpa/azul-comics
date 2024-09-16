import React from 'react';

const Header = ({ setActivePage }) => {
    return (
        <header>
            <div className="header-container">
                <h1>Azul Comics</h1>
                <nav>
                    <ul>
                        <li><a href="#Home" onClick={() => setActivePage('Home')}>Inicio</a></li>
                        <li><a href="#Comic" onClick={() => setActivePage('Comic')}>Comic</a></li>
                        <li><a href="#Chapter" onClick={() => setActivePage('Chapter')}>Chapter</a></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a href="https://twitter.com/Azulcomics" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com/Azulcomics" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
