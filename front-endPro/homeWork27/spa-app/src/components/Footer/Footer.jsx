import React, {useContext} from 'react';
import {ThemeContext} from '../../themeContext';
import './Footer.css';

const Footer = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <footer
            className="footer"
            style={{backgroundColor: theme.footerBackground, color: theme.color}}
        >
            <h1 className="footer-title">SPA-APP</h1>
            <ul className="footer-list">
                <li>Phone number: +380939991111</li>
                <li>Email: oleksii-katorzhyn@example.com</li>
                <li>
                    Git:{' '}
                    <a href="https://github.com/katorzhin" className="footer-link">
                        github.com/katorzhin
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
