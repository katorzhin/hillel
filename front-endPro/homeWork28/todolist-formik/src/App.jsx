import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <div className="todo-container">
                <h1 className="todo-title">ToDo List</h1>
                <TodoForm onAddTask={addTask} />
                <TodoList tasks={tasks} onDeleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default App;
