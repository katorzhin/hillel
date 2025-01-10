import React from "react";
import {useSelector} from "react-redux";
import "./TodoList.css";

const TodoList = () => {
    const tasks = useSelector((state) => state.todo.tasks);

    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks added yet.</p>;
    }

    return (
        <ul className="todo-list">{tasks.map((task, index) => (
            <li key={index} className="todo-item">{task}</li>
        ))}
        </ul>
    );
};

export default TodoList;