import { createSlice } from "@reduxjs/toolkit";
import * as ROUTES from '../../constants/routes';


export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        selectedMenuItem: ROUTES.HOME,
        selectedGenreId: null,
        selectedMovieId: null
    },
    reducers: {
        setSelectedMenuItem: (state, action) => {
            state.selectedMenuItem = action.payload;
        },
        setSelectedGenreId: (state, action) => {
            state.selectedGenreId = action.payload;
        },
        setSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        },
    },
});

export const getGeneralSlice = (state) => state.general;

export const {
    setSelectedMenuItem,
    setSelectedGenreId,
    setSelectedMovieId
} = generalSlice.actions;

export default generalSlice.reducer;


