import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../themeContext';
import './Main.css';

const Main = () => {
    const {theme} = useContext(ThemeContext);
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className={`todo-container ${theme.isDark ? 'dark' : ''}`}>
            <h2 className="todo-title">ToDo List</h2>
            <div className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="todo-input"
                    placeholder="Enter your task"/>
                <button onClick={addTodo} className="todo-add-button">
                    Add
                </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <span>{todo}</span>
                        <button
                            onClick={() => deleteTodo(index)}
                            className="todo-delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;

