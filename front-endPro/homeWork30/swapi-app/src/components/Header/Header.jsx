import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/slices/swapiSlice";
import "./Header.css";

const Header = () => {
    const [url, setUrl] = useState("https://swapi.tech/api/");
    const dispatch = useDispatch();

    const handleFetch = () => {
        dispatch(fetchData(url));
    };

    return (
        <div className="header">
            <h1>SWAPI</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="url-input"/>
                <button onClick={handleFetch} className="fetch-button">Get Info</button>
            </div>
        </div>
    );
};

export default Header;
