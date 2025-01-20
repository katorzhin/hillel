import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/slices/todosSlice';
import {isNotEmpty, hasMinLength} from '../../helpers/validators';
import Input from '../Input/Input';
import './TodoForm.css';

function TodoForm() {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isNotEmpty(text)) {
            setError('The field cannot be empty!');
            return;
        }
        if (!hasMinLength(text, 3)) {
            setError('Minimum length - 3 characters!');
            return;
        }

        setError('');
        dispatch(addTodo({text}));
        setText('');
    };

    const handleChange = (e) => {
        setText(e.target.value);
        if (error) {
            setError('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

            <div className="input-button-row">
                <Input className="todo-form-input" type="text" placeholder="Enter todo..." value={text}
                       onChange={handleChange}/>
                <button className="todo-form-button" type="submit">Add</button>
            </div>

            {error && <p className="error-message">{error}</p>}
        </form>
    );
}

export default TodoForm;