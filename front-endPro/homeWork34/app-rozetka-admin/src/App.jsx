import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Preview from './pages/Preview/Preview';

function App() {
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/products" element={token ? <Products/> : <Navigate to="/login"/>}/>
                    <Route path="/preview" element={token ? <Preview/> : <Navigate to="/login"/>}/>
                    <Route path="*" element={<div>Not Found</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;