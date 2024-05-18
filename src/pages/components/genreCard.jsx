import { React } from "react";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { setSelectedGenreId } from "../../redux/slice/generalSlice";

const GenreCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button sx={{
      height:"90px",
      fontSize:"20px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#092635",
      borderRadius: "8px",
      padding: "10px 20px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#1B4242",
                transform: "translateY(-2px)",
              },
    }}
      onClick={() => {
        Cookies.set("selectedGenreId", props.id);
        dispatch(setSelectedGenreId(props.id));
        navigate(ROUTES.MOVIELIST, {state: {genreName: props.name }});
      }}
    >
      {props.name}
    </Button>
  );
};

export default GenreCard;
