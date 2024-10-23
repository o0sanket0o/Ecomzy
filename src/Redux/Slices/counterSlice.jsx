import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"counter",
    initialState: [],
    reducers:{
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((curr) => curr.id !== action.payload);
        },
    }
})
export const {add, remove} = counterSlice.actions;
export default counterSlice.reducer;