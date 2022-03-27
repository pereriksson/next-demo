import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
    'fetchServices',
    async () => {
        return await fetch("https://api.test.privatmaklaren.se/v1/services")
            .then(response => response.json());
    }
)

const servicesSlice = createSlice({
    name: "services",
    initialState: {
        entities: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.entities = action.payload;
        })
    }
});

export default servicesSlice;