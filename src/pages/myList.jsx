import React from "react";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import MovieListItem from "./components/movieListItem";

const MyList = () => {
  const location = useLocation();
  const { movies, favorites } = location.state || {};  

  console.log("favorites", favorites, movies);


  const isFavorite = (movie) => favorites && favorites.some((fav) => fav.id === movie.id);

  return (
    <Stack>
      {movies > 0 && movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => onFavoriteToggle(movie)}>
            {isFavorite(movie) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </Stack>
  );
};

export default MyList;

/*
return (
    <Stack
      display={"flex"}
      direction={"row"}
      mt={"20px"}
      mb={"60px"}
      flexWrap={"wrap"}
      gap={6}
      justifyContent={"center"}
    >
      {favorites.length > 0 &&
        favorites.map((movieItem, movieIndex) => (
          <MovieListItem
            key={`movie-${movieIndex}-${movieItem.id}`}
            {...movieItem}
          />
        ))}
      {favorites.length <= 0 && <div>You didn't add a movie.</div>}
    </Stack>
  );*/