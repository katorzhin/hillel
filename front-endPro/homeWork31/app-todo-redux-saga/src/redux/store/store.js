import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import todosReducer from '../slices/todosSlice';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);