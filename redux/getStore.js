import {configureStore} from "@reduxjs/toolkit";
import servicesSlice from "./slices/servicesSlice";
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        services: servicesSlice.reducer
    },
    devTools: true
});

export const wrapper = createWrapper(makeStore);