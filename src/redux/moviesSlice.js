import { createSlice } from '@reduxjs/toolkit'
// import Favorite from '../components/Favorite';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        searchQuery: 'titanic',
        favorite: []
    },
    reducers: {
        searchRedux: (state, action) => {
            state.searchQuery = action.payload;
        },
        setFavRedux: (state, action) => {
            state.favorite = action.payload;
        }
    }
})

export const { searchRedux, setFavRedux } = moviesSlice.actions
export default moviesSlice.reducer