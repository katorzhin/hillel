import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos, clearTodos,} from './redux/slices/todosSlice';
import {selectLoading, selectError} from './redux/slices/selectors';

import TodoForm from './components/TodoForm/TodoForm';
import ItemsList from './components/ItemsList/ItemsList';

import './App.css';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleClearAll = () => {
        dispatch(clearTodos());
    };

    return (
        <div className="App">
            <h1>TODO - List</h1>

            <TodoForm/>

            {loading && <p className="message loading">Loading...</p>}
            {error && <p className="message error">Error: {error}</p>}

            <ItemsList/>

            <button className="clear-button" onClick={handleClearAll}>Clear All</button>
        </div>
    );
}

export default App;
