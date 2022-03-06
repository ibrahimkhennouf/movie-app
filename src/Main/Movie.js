import { Card } from "./Card";
import { useContext } from "react";
import { MoviesContext } from "../MovieContext";
export let Movies = () => {
  var { movies } = useContext(MoviesContext);
  return (
    <div className="main">
      <h1>HOME</h1>
      {movies.map((movie) => {
        return (
          <Card name={movie.title} poster={movie.poster} id={movie.id}></Card>
        );
      })}
    </div>
  );
};
