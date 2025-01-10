import React from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../../store/slices/swapiSlice";
import "./Footer.css";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <button onClick={() => dispatch(clearData())} className="clear-button">
                Clear
            </button>
        </div>
    );
};

export default Footer;