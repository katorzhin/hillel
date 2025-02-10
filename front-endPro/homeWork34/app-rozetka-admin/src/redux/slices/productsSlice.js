import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        addProduct: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        },
        addProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        editProduct: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        editProductSuccess: (state, action) => {
            state.loading = false;
            const updated = action.payload;
            const idx = state.items.findIndex((p) => p.id === updated.id);
            if (idx !== -1) {
                state.items[idx] = updated;
            }
        },
        editProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteProduct: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        deleteProductSuccess: (state, action) => {
            state.loading = false;
            const id = action.payload;
            state.items = state.items.filter((p) => p.id !== id);
        },
        deleteProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
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
} = productsSlice.actions;

export default productsSlice.reducer;