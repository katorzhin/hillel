import {all, call, put, takeLatest} from 'redux-saga/effects';
import constants from '../constants/constants';

import {
    fetchTodos,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    addTodoSuccess,
    addTodoFailure,
    deleteTodo,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodo,
    toggleTodoSuccess,
    toggleTodoFailure,
    editTodo,
    editTodoSuccess,
    editTodoFailure,
    clearTodos,
    clearTodosSuccess,
    clearTodosFailure,
} from '../slices/todosSlice';

function* fetchTodosWorker() {
    try {
        const response = yield call(fetch, constants.URL_TODO);
        const data = yield call([response, response.json]);
        yield put(fetchTodosSuccess(data));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* addTodoWorker(action) {
    try {
        const response = yield call(fetch, constants.URL_TODO, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: action.payload.text,
                completed: false,
            }),
        });
        const data = yield call([response, response.json]);
        yield put(addTodoSuccess(data));
    } catch (error) {
        yield put(addTodoFailure(error.message));
    }
}

function* deleteTodoWorker(action) {
    try {
        yield call(fetch, `${constants.URL_TODO}/${action.payload.id}`, {
            method: 'DELETE',
        });
        yield put(deleteTodoSuccess(action.payload.id));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

function* toggleTodoWorker(action) {
    const {id, completed} = action.payload;
    try {
        const response = yield call(fetch, `${constants.URL_TODO}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({completed: !completed}),
        });
        const data = yield call([response, response.json]);
        yield put(toggleTodoSuccess(data));
    } catch (error) {
        yield put(toggleTodoFailure(error.message));
    }
}

function* editTodoWorker(action) {
    const {id, text} = action.payload;
    try {
        const response = yield call(fetch, `${constants.URL_TODO}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text}),
        });
        const data = yield call([response, response.json]);
        yield put(editTodoSuccess(data));
    } catch (error) {
        yield put(editTodoFailure(error.message));
    }
}

function* clearTodosWorker() {
    try {
        const response = yield call(fetch, constants.URL_TODO);
        const data = yield call([response, response.json]);

        for (const todo of data) {
            yield call(fetch, `${constants.URL_TODO}/${todo.id}`, {
                method: 'DELETE',
            });
        }

        yield put(clearTodosSuccess());
    } catch (error) {
        yield put(clearTodosFailure(error.message));
    }
}

function* watchTodos() {
    yield takeLatest(fetchTodos.type, fetchTodosWorker);
    yield takeLatest(addTodo.type, addTodoWorker);
    yield takeLatest(deleteTodo.type, deleteTodoWorker);
    yield takeLatest(toggleTodo.type, toggleTodoWorker);
    yield takeLatest(editTodo.type, editTodoWorker);
    yield takeLatest(clearTodos.type, clearTodosWorker);
}

export default function* rootSaga() {
    yield all([watchTodos()]);
}