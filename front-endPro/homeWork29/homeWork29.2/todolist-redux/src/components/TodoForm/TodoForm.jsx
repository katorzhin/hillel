import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/slices/todoSlice";
import "./TodoForm.css";

const TodoForm = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask(task));
            setTask("");
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Enter your task" value={task}
                   onChange={(e) => setTask(e.target.value)}/>
            <button type="submit" className="todo-add-button">Add</button>
        </form>
    );
};

export default TodoForm;
