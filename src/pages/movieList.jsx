import { React, useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { getGeneralSlice } from "../redux/slice/generalSlice";
import restService from "../service/rest-service";
import MovieListItem from "./components/movieListItem";
import { useLocation } from "react-router-dom";

const MovieList = () => {
  const { selectedGenreId } = useSelector(getGeneralSlice);

  const location = useLocation();
  const { genreName } = location.state || {};

  const [movieList, setMovieList] = useState([]);

  const getMovieList = (genreId) => {
    restService
      .getMoviesByGenreId("/discover/movie", genreId)
      .then((response) => {
        setMovieList(response.results);
        //console.log(response.results);
      });
  };

  useEffect(() => {
    getMovieList(selectedGenreId);
  }, []);

  return (
    <Stack
      className="col my-2 mx-5"
      sx={{ color: "#092635", fontSize: "40px", fontWeight: "bold" }}
    >
      {genreName}
      
      <Stack
        display={"flex"}
        direction={"row"}
        mb={"60px"}
        flexWrap={"wrap"}
        gap={6}
        justifyContent={"center"}
      >
        {movieList.length > 0 &&
          movieList.map((movieItem, movieIndex) => (
            <MovieListItem
              key={`movie-${movieIndex}-${movieItem.id}`}
              {...movieItem}
            />
          ))}
      </Stack>
    </Stack>
  );
};

export default MovieList;
