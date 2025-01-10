import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("swapi/fetchData", async (url) => {
    const response = await axios.get(url);
    return response.data;
});

const swapiSlice = createSlice({
    name: "swapi",
    initialState: {data: null},
    reducers: {
        clearData: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const {clearData} = swapiSlice.actions;
export default swapiSlice.reducer;