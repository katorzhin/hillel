import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import AboutMe from './components/AboutMe/AboutMe';
import NotFound from './components/NotFound/NotFound';
import {ThemeContext, themes} from './themeContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    useEffect(() => {
        document.documentElement.className = theme === themes.light ? 'light-theme' : 'dark-theme';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Router>
                <ErrorBoundary>
                    <div className="app">
                        <Header/>
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<Main/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/about-me" element={<AboutMe/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </ErrorBoundary>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;