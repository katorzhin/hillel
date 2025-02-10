import { all } from 'redux-saga/effects';
import { watchProducts } from './productsSagas';

export default function* rootSaga() {
    yield all([
        watchProducts()
    ]);
}