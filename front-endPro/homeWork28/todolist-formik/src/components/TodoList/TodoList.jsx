import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import "./TodoList.css";

const TodoList = () => {
    const [tasks, setTasks] = React.useState([]);

    const validationSchema = Yup.object({
        task: Yup.string()
            .min(5, "Task must be at least 5 characters long")
            .required("Task is required"),
    });

    const handleSubmit = (values, {resetForm}) => {
        setTasks([...tasks, values.task]);
        resetForm();
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">ToDo List</h1>
            <Formik
                initialValues={{task: ""}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <div className="input-container">
                            <div className="todo-form">
                                <Field
                                    type="text"
                                    name="task"
                                    placeholder="Enter your task"
                                    className="todo-input"/>
                                <button type="submit" className="todo-add-button">Add</button>
                            </div>
                            <ErrorMessage name="task" component="p" className="todo-error"/>
                        </div>
                    </Form>
                )}
            </Formik>
            <ul className="todo-list">
                {tasks.map((t, index) => (
                    <li key={index} className="todo-item">
                        {t}
                        <button className="todo-delete-button"
                                onClick={() =>
                                    handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
