import React from 'react';
import './Input.css';

function Input({className = '', ...rest}) {
    return <input className={`custom-input ${className}`} {...rest} />;
}

export default Input;