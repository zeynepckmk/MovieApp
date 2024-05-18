import { React, useState, useEffect } from "react";
import { getGeneralSlice } from "../redux/slice/generalSlice";
import restService from "../service/rest-service";
import { useSelector } from "react-redux";

import { IconButton, Badge } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Moment from "moment"; // reverse date

const MovieDetail = () => {
  const { selectedMovieId } = useSelector(getGeneralSlice);

  const [movie, setMovie] = useState({});

  const getMovieDetail = (movieId) => {
    restService.getMovieDetailByMovieId("/movie/", movieId).then((response) => {
      setMovie(response);
    });
  };

  useEffect(() => {
    getMovieDetail(selectedMovieId);
  }, []);

  const voteAverage =
    movie && movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average.toFixed(2)
      : "N/A";

  return (
    <div
      className="card position-relative"
      style={{
        margin: "0",
        width: "100%",
        height: "670px",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundColor: "grey",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div>
        <IconButton
          onClick={() => {
            window.history.back();
          }}
          aria-label="back"
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: 50 }} />
        </IconButton>
      </div>
      <div
        className="row g-0 m-3 mx-auto my-auto"
        style={{
          fontWeight: "bold",
          color: "#092635",
          backgroundImage:
            "linear-gradient(to right bottom, #092635, #1B4242, #5C8374, #9EC8B9, #1B4242)",
        }}
      >
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start "
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "8px",
            }}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-header" style={{ color: "white" }}>
              {movie.title}
            </h2>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  {Moment(movie.release_date).format("DD-MM-YYYY")}
                </div>
                <div className="col-9">
                  {movie.genres && (
                    <div style={{ display: "flex" }}>
                      {movie.genres.map((genreItem, genreIndex) => (
                        <div
                          key={`genre-${genreIndex}-${genreItem.id}`}
                          style={{ marginRight: "10px" }}
                        >
                          {genreItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={{width:"700px"}}>
            <div className="container ">
              <div className="row" >
                <div className="col-md-9 ">
                  <h4 
                  style={{ color: "white", width:"auto" }}>
                    {movie.tagline}
                  </h4>
                  <p className="card-text">
                    {movie.overview}
                  </p>
                </div>
                <div className="position-relative">
                  <p
                    className="position-absolute top-0 end-0"
                    style={{ translate: "-50px" }}
                  >
                    <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                      color="secondary"
                      badgeContent={voteAverage}
                    >
                      <ThumbUpIcon sx={{height:"30px", width:"40px"}} />
                    </Badge>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
