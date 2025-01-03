import {createContext} from 'react';

export const themes = {
    light: {
        isDark: false,
        background: '#f5f5f5',
        color: '#000000',
        headerBackground: '#ffffff',
        footerBackground: '#ffffff',
        buttonBackground: '#007bff',
        buttonColor: '#ffffff',
        linkColor: '#007bff',
    },
    dark: {
        isDark: true,
        background: '#333333',
        color: '#ffffff',
        headerBackground: '#444444',
        footerBackground: '#444444',
        buttonBackground: '#6c757d',
        buttonColor: '#ffffff',
        linkColor: '#17a2b8',
    },
};

export const ThemeContext = createContext();
