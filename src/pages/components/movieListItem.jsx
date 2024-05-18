import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { setSelectedMovieId } from "../../redux/slice/generalSlice";
import Cookies from "js-cookie";
import {
  getFavoritesSlice,
  addFavorite,
  removeFavorite,
} from "../../redux/slice/favoritesSlice";

const MovieListItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Favorites } = useSelector(getFavoritesSlice);
  //const [showMyList, setShowMyList] = useState(false);

  const handleFavoriteToggle = (movie) => {
    if (Favorites && Favorites.some((fav) => fav.id === movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
    Cookies.set("Favorites", movie)
  };

  return (
    <Stack
      className="card"
      m={"10px"}
      gap={1}
      sx={{ width: "350px", height: "auto", backgroundColor: "#5C8374" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
        className="card-img-top"
        height={"480px"}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {props.title}
        </h5>
        <Stack direction={"row"} spacing={2} paddingTop={1}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1B4242",
              "&: hover": { backgroundColor: "#092635" },
            }}
            onClick={() => {
              Cookies.set("selectedMovieId", props.id);
              dispatch(setSelectedMovieId(props.id));
              navigate(ROUTES.MOVIEDETAIL);
            }}
          >
            MOVIE DETAILS
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1B4242",
              "&: hover": { backgroundColor: "#092635" },
            }}
            onClick={() => {
              //setShowMyList(!showMyList);
              handleFavoriteToggle(props);
              //showMyList &&
                navigate(ROUTES.MYLIST, {
                  state: {
                    movies: { props },
                    favorites: { Favorites },
                  },
                });
            }}
          >
          ADD TO FAVORITES
            {/* {showMyList ? "DELETE FROM FAVORITES" : "ADD TO FAVORITES"} */}
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default MovieListItem;
