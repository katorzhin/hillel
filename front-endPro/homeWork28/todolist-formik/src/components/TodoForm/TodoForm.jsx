import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import validationSchema from "../../schemas/todoFormSchema";
import "./TodoForm.css";

const TodoForm = ({onAddTask}) => {
    return (
        <Formik
            initialValues={{task: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                onAddTask(values.task);
                resetForm();
            }}>
            {() => (
                <Form>
                    <div className="todo-form">
                        <Field type="text" name="task" placeholder="Enter your task" className="todo-input"/>
                        <button type="submit" className="todo-add-button">Add</button>
                    </div>
                    <ErrorMessage name="task" component="p" className="todo-error"/>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;