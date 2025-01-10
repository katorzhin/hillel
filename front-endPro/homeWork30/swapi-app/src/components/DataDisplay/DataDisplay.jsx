import React from "react";
import { useSelector } from "react-redux";
import "./DataDisplay.css";

const DataDisplay = () => {
    const { data } = useSelector((state) => state.swapi);

    return (
        <div className="data-display">
            <pre>{data ? JSON.stringify(data, null, 2) : "No data available."}</pre>
        </div>
    );
};

export default DataDisplay;