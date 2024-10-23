import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
    },
})

export default store;