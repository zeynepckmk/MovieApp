import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setSelectedGenreId } from "../redux/slice/generalSlice";

const GenreId = ({ children }) => {
    const dispatch = useDispatch();

    console.log('selectedGenreId', Cookies.get('selectedGenreId'));
    
    useEffect(() => {
        const genreId = Cookies.get('selectedGenreId');
        if (genreId)
            dispatch(setSelectedGenreId(genreId))
    }, [])

  return children;
};

export default GenreId;
