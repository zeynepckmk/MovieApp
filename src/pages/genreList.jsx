import { React, useState, useEffect } from "react";
import restService from "../service/rest-service";
import { Stack, Container } from "@mui/material";
import GenreCard from "./components/genreCard";
import { useDispatch } from "react-redux";
import { setSelectedGenreId } from "../redux/slice/generalSlice";
import Cookies from "js-cookie";

const MovieGenres = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    Cookies.remove("selectedGenreId");
    dispatch(setSelectedGenreId(null));
    getGenres();
  }, []);

  const getGenres = () => {
    restService.get("/genre/movie/list").then((response) => {
      setGenres(response.genres);
    });
  };

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Stack
        display={"flex"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {genres.length > 0 &&
          genres.map((genreItem, genreIndex) => (
            <GenreCard key={genreIndex} {...genreItem} />
          ))}
      </Stack>
    </Container>
  );
};

export default MovieGenres;
