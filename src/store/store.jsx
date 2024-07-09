import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./reducers/MovieSlice";
import tvSlice from "./reducers/tvSlice";
import personSlice from "./reducers/personSlice";

export const store = configureStore({
    reducer:{
        movieReducer:MovieSlice,
        tvReducer:tvSlice,
        personReducer:personSlice
    },
})