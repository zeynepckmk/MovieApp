import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slice/generalSlice";
import favoritesReducer from "./slice/favoritesSlice";

export default configureStore({
    reducer: {
        general: generalSlice,
        favorites: favoritesReducer
    }
})
