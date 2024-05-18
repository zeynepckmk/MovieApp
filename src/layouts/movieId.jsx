import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setSelectedMovieId } from "../redux/slice/generalSlice";

const MovieId = ({ children }) => {
    const dispatch = useDispatch();

    console.log('selectedMovieId', Cookies.get('selectedMovieId'));
    
    useEffect(() => {
        const movieId = Cookies.get('selectedMovieId');
        if (movieId)
            dispatch(setSelectedMovieId(movieId))
    }, [])

  return children;
};

export default MovieId;