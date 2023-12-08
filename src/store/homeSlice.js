import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        home_url: {},
        genres: {}
    },
    reducers: {
        getApiconfiguration: (state, action) => {
            state.home_url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        }
    },
})
export const { getApiconfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer