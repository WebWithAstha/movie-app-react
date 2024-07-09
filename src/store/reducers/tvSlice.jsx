import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        info: null,
        reducers: {
            loadTv: (state, action) => {
                state.info = action.payload
            },
            resetTv: (state) => {
                state.info = null
            }
        }
    }
})

export default tvSlice.reducer
export const { loadTv, resetTv } = tvSlice.actions 