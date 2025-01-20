import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, toggleTodo, editTodo,} from '../../redux/slices/todosSlice';
import {selectTodos} from '../../redux/slices/selectors';
import './ItemsList.css';

function ItemsList() {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleToggle = (todo) => {
        dispatch(toggleTodo({id: todo.id, completed: todo.completed}));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo({id}));
    };

    const handleEditStart = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (!editText.trim()) return;
        dispatch(editTodo({id: editId, text: editText}));
        setEditId(null);
        setEditText('');
    };

    if (!todos.length) {
        return <p className="empty-list">No todos yet...</p>;
    }

    return (
        <ul className="items-list">
            {todos.map((todo) => (
                <li key={todo.id} className={`item ${todo.completed ? 'completed' : ''}`}>
                    {editId === todo.id ? (
                        <form onSubmit={handleEditSubmit} className="edit-form">
                            <input
                                className="edit-input"
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}/>
                            <button className="save-button" type="submit">Save</button>
                        </form>
                    ) : (
                        <>
                            <span className="item-text" onClick={() => handleToggle(todo)}>{todo.text}</span>
                            <div className="buttons">
                                <button className="edit-button" onClick={() => handleEditStart(todo)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ItemsList;
