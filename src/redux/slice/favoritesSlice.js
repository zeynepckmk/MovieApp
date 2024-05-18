import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        Favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.Favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.Favorites.filter(movie => movie.id !== action.payload.id);
        }
    }
});

export const getFavoritesSlice = (state) => state.favorites;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;