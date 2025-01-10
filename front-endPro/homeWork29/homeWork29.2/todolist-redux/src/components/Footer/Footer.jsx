import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = () => {
    const taskCount = useSelector((state) => state.todo.tasks.length);

    return <div className="footer">Total tasks: {taskCount}</div>;
};

export default Footer;
