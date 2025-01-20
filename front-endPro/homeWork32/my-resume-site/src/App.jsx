import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Swapi from './components/Swapi/Swapi';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/todo" element={<Todo/>}/>
                        <Route path="/swapi" element={<Swapi/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;