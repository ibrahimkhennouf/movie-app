import "./Main.css";

import { OnScreen } from "../pages/OnScreen";
import { Routes, Route } from "react-router-dom";
import { Movies } from "./Movie";
import { movies } from "../Movies";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";
import { AddMovie } from "../pages/AddMovie";
import { MoviesProvider } from "../MovieContext";
export let Main = () => {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Movies movies={movies}></Movies>}></Route>
        <Route
          path="/onScreen"
          element={<OnScreen movies={movies}></OnScreen>}
        ></Route>
        <Route
          path="/movie/:movieID"
          element={<Details movies={movies}></Details>}
        ></Route>
        <Route
          path="/movie/add"
          element={<AddMovie movies={movies}></AddMovie>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </MoviesProvider>
  );
};
