import React, {useState} from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LOGO_LOGIN} from "../../Links/links.js";
import constants from '../../redux/constants/constants';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login: '',
        password: '',
        showPassword: false,
    });
    const [error, setError] = useState('');

    const handleChange = (field) => (e) => {
        setFormData({...formData, [field]: e.target.value});
    };

    const handleTogglePassword = () => {
        setFormData((prev) => ({...prev, showPassword: !prev.showPassword}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const {login, password} = formData;

        if (!login.trim() || !password.trim()) {
            setError('Fields cannot be empty!');
            return;
        }

        try {
            const response = await axios.get(constants.LOGIN_API);
            const users = response.data;

            const userFound = users.find(
                (u) => u.login === login && u.password === password
            );

            if (!userFound) {

                setError('Invalid credentials!');
                return;
            }

            localStorage.setItem('token', 'fakeToken');

            navigate('/products');

        } catch (err) {
            console.error('Login error:', err);
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <img src={LOGO_LOGIN} alt="Rozetka" className="login-logo"/>

                <form onSubmit={handleSubmit} className="login-form">
                    <TextField
                        label="Login"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.login}
                        onChange={handleChange('login')}/>

                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={formData.showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {formData.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}/>

                    {error && <p className="login-error">{error}</p>}

                    <Button variant="contained" color="success" type="submit" fullWidth sx={{mt: 2}}>Login</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
