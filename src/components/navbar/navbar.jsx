import * as React from "react";
import * as ROUTES from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getGeneralSlice,
  setSelectedMenuItem,
} from "../../redux/slice/generalSlice";

const navbarItem = [
  {
    key: ROUTES.HOME,
    name: "Movie Genres",
  },
  {
    key: ROUTES.MYLIST,
    name: "my List",
  },
];

const Navbar = () => {
  const dispatch = useDispatch(); // update redux state
  const { selectedMenuItem } = useSelector(getGeneralSlice); // get redux state
  const navigate = useNavigate();

  //console.log('selectedMenuItem', selectedMenuItem);

  return (
    <Stack
      sx={{
        height: "10vh",
        lineHeight: "10vh",
        backgroundImage:
          "linear-gradient(to right bottom, #092635, #1B4242, #5C8374, #9EC8B9, #1B4242, #092635)",
        flexDirection: "row",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <Stack direction={"row"} gap={3} ml={10}>
        {navbarItem.map((nbItem, nbIndex) => (
          <Stack
            key={`navbar-item-${nbIndex}`}
            sx={{
              "&: hover": {
                cursor: "pointer",
                backgroundColor: "lightblue",
                transform: "translateY(-2px)",
                borderRadius: "4px",
              },
            }}
            onClick={() => {
              dispatch(setSelectedMenuItem(nbItem.key));
              navigate(nbItem.key);
            }}
          >
            <Typography
              component={"p"}
              fontWeight={nbItem.key === selectedMenuItem && "bold"}
            >
              {nbItem.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
