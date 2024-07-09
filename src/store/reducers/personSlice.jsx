import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: 'person',
    initialState: {
        info: null,
    },
    reducers: {
        loadPerson: (state, action) => {
            state.info = action.payload
        },
        resetPerson: (state) => {
            state.info = null
        }

    }
})

export default personSlice.reducer
export const { loadPerson, resetPerson } = personSlice.actions 