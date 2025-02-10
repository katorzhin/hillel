import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productsReducer from '../slices/productsSlice';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);