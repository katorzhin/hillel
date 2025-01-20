import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        fetchTodos: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        addTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        addTodoSuccess: (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        },
        addTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        deleteTodoSuccess: (state, action) => {
            state.loading = false;
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        deleteTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        toggleTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        toggleTodoSuccess: (state, action) => {
            state.loading = false;
            const updated = action.payload;
            const index = state.items.findIndex((item) => item.id === updated.id);
            if (index !== -1) {
                state.items[index] = updated;
            }
        },
        toggleTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        editTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        editTodoSuccess: (state, action) => {
            state.loading = false;
            const updated = action.payload;
            const index = state.items.findIndex((item) => item.id === updated.id);
            if (index !== -1) {
                state.items[index] = updated;
            }
        },
        editTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        clearTodos: (state) => {
            state.loading = true;
            state.error = null;
        },
        clearTodosSuccess: (state) => {
            state.loading = false;
            state.items = [];
        },
        clearTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
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
} = todosSlice.actions;

export default todosSlice.reducer;