import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
    return (
        <AppBar position="static" className="header-appbar">
            <Toolbar className="header-toolbar">
                <Typography variant="h6" className="header-logo">My Resume</Typography>

                <div className="nav-links">
                    <Link to="/" className="nav-link"><Button color="inherit">Home</Button></Link>
                    <Link to="/todo" className="nav-link"><Button color="inherit">Todo</Button></Link>
                    <Link to="/swapi" className="nav-link"><Button color="inherit">SWAPI</Button></Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;