import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {TYPES} from "../../store/store";
import "./Counter.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state);

    return (
        <div className="counter-container">
            <h1>Value: {counter}</h1>
            <div className="button-container">
                <button
                    onClick={() => dispatch({type: TYPES.INCREMENT})}
                    className="counter-button">
                    +
                </button>
                <button
                    onClick={() => dispatch({type: TYPES.DECREMENT})}
                    className="counter-button"
                    disabled={counter === 0}>
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
