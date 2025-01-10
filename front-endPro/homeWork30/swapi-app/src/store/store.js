import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./slices/swapiSlice";

const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});

export default store;