import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        info: null,
    },
    reducers: {
        loadMovie: (state, action) => {
            state.info = action.payload
        },
        resetMovie: (state) => {
            state.info = null
        }

    }
})


export default movieSlice.reducer
export const { loadMovie, resetMovie } = movieSlice.actions 