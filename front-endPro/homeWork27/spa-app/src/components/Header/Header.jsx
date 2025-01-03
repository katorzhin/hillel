import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {ThemeContext} from '../../themeContext';
import './Header.css';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className="header" style={{backgroundColor: theme.headerBackground, color: theme.color}}>
            <div className="header-container">
                <h1 className="header-title">SPA-APP</h1>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/" className="nav-link">
                                Main
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className="nav-link">
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-me" className="nav-link">
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="toggle-button" onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </header>
    );
};

export default Header;
