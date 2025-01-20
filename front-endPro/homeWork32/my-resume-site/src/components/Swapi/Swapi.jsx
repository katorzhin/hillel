import React, { useState } from 'react';
import './Swapi.css';

function Swapi() {

    const [baseUrl, setBaseUrl] = useState('https://swapi.py4e.com/api/');

    const [endpoint, setEndpoint] = useState('people/1');

    const [responseData, setResponseData] = useState(null);


    const handleGetInfo = async () => {
        try {
            const fullUrl = baseUrl + endpoint;
            const res = await fetch(fullUrl);
            const data = await res.json();
            setResponseData(data);
        } catch (error) {
            console.error('SWAPI fetch error:', error);
            setResponseData(null);
        }
    };

    const handleClear = () => {
        setResponseData(null);
    };

    return (
        <div className="swapi-container">
            <h2>SWAPI</h2>

            <div className="swapi-inputs">
                <input
                    className="swapi-base-input"
                    type="text"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}/>
                <span className="slash">/</span>
                <input
                    className="swapi-endpoint-input"
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}/>
                <button className="swapi-get-button" onClick={handleGetInfo}>Get info</button>
            </div>

            {responseData && (
                <div className="swapi-response">
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}

            <button className="swapi-clear-button" onClick={handleClear}>Clear</button>
        </div>
    );
}

export default Swapi;
