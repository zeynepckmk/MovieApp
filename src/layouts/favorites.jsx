import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/slice/favoritesSlice";

const Favorites = ({ children }) => {
    const dispatch = useDispatch();

    console.log('Favorites Cookies', Cookies.get('Favorites'));
    
    useEffect(() => {
        const movies = Cookies.get('Favorites');
        if (movies)
            dispatch(addFavorite(movies))
    }, [])

  return children;
};

export default Favorites;