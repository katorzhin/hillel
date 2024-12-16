import React from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx';

const App = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-3 text-start">SWAPI</h1>
            <Form/>
            <List/>
        </div>
    );
};

export default App;
