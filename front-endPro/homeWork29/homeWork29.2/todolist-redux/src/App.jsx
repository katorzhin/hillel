import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="todo-container">
                <h1 className="todo-title">Todo List</h1>
                <TodoForm />
                <TodoList />
                <Footer />
            </div>
        </div>
    );
};

export default App;