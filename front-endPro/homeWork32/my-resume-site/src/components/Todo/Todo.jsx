import React, {useState} from 'react';
import './Todo.css';

function Todo() {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (!text.trim()) return;
        setList([...list, {id: Date.now(), text}]);
        setText('');
    };

    const handleDelete = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    return (
        <div className="todo-container">
            <h2>My TODO List</h2>

            <div className="todo-form">
                <input
                    type="text"
                    placeholder="Enter the task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <ul className="todo-list">
                {list.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;