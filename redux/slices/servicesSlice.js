import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

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
    reducers: {
        setServices: (state, action) => {
            state.entities = action.payload;
        }
    },
    extraReducers: {
            [HYDRATE]: (state, action) => {

            if (!action.payload.services.entities) {
                return state;
            }

            state.entities = action.payload.services.entities;
        }
    }
});

export const { setServices } = servicesSlice.actions;

export default servicesSlice;