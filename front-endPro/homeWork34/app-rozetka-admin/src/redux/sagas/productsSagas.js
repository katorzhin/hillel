import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import constants from '../constants/constants';

import {
    fetchProducts,
    fetchProductsSuccess,
    fetchProductsFailure,
    addProduct,
    addProductSuccess,
    addProductFailure,
    editProduct,
    editProductSuccess,
    editProductFailure,
    deleteProduct,
    deleteProductSuccess,
    deleteProductFailure,
} from '../slices/productsSlice';

function* fetchProductsWorker() {
    try {
        const response = yield call(axios.get, constants.URL_PRODUCTS);
        yield put(fetchProductsSuccess(response.data));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* addProductWorker(action) {
    try {
        const response = yield call(axios.post, constants.URL_PRODUCTS, action.payload);
        yield put(addProductSuccess(response.data));
    } catch (error) {
        yield put(addProductFailure(error.message));
    }
}

function* editProductWorker(action) {
    const {id, ...rest} = action.payload;
    try {
        const response = yield call(axios.put, `${constants.URL_PRODUCTS}/${id}`, rest);
        yield put(editProductSuccess(response.data));
    } catch (error) {
        yield put(editProductFailure(error.message));
    }
}

function* deleteProductWorker(action) {
    const {id} = action.payload;
    try {
        yield call(axios.delete, `${constants.URL_PRODUCTS}/${id}`);
        yield put(deleteProductSuccess(id));
    } catch (error) {
        yield put(deleteProductFailure(error.message));
    }
}

export function* watchProducts() {
    yield takeLatest(fetchProducts.type, fetchProductsWorker);
    yield takeLatest(addProduct.type, addProductWorker);
    yield takeLatest(editProduct.type, editProductWorker);
    yield takeLatest(deleteProduct.type, deleteProductWorker);
}