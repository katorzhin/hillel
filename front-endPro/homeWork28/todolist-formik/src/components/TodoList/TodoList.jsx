import React from "react";
import "./TodoList.css";

const TodoList = ({tasks, onDeleteTask}) => {
    return (
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <li key={index} className="todo-item">
                    {task}
                    <button className="todo-delete-button" onClick={() => onDeleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
