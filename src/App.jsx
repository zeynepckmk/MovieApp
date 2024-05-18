import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import * as ROUTES from "./constants/routes";

import store from "./redux/store";
import { Provider } from "react-redux";

import GenreId from "./layouts/genreId";
import MovieId from "./layouts/movieId";
import Favorites from "./layouts/favorites";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const Home = lazy(() => import("./pages/genreList"));
  const MovieList = lazy(() => import("./pages/movieList"));
  const MovieDetail = lazy(() => import("./pages/movieDetail"));
  const MyList = lazy(() => import("./pages/myList"));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GenreId>
          <MovieId>
            <Favorites>
              <Navbar />
              <Suspense fallback={<div>Loading</div>}>
                <Routes>
                  <Route exact path={ROUTES.HOME} element={<Home />} />
                  <Route exact path={ROUTES.MOVIELIST} element={<MovieList />} />
                  <Route exact path={ROUTES.MOVIEDETAIL} element={<MovieDetail />} />
                  <Route exact path={ROUTES.MYLIST} element={<MyList />} />
                </Routes>
              </Suspense>
            </Favorites>
          </MovieId>
        </GenreId>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
