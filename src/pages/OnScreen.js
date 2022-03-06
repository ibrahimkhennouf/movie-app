import { Card } from "../Main/Card";
export let OnScreen = ({ movies }) => {
  return (
    <div className="main">
      <h1>Now playing</h1>
      {movies.map((movie) => {
        return (
          movie.screen && (
            <Card name={movie.title} poster={movie.poster} id={movie.id}></Card>
          )
        );
      })}
    </div>
  );
};
