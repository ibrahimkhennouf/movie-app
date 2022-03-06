import { useParams } from "react-router-dom";

export let Details = ({ movies }) => {
  let params = useParams();
  let { movieID } = params;

  let movie = movies.find((movie) => {
    return movie.id === movieID;
  });
  let dte = new Date(movie.release_date * 1000);

  return (
    <div className="detail">
      <h1>Movie Details</h1>
      <img src={movie.poster} alt="" style={{ width: "15%" }} />
      <h2>
        {" "}
        <span>Title:</span> {movie.title}
      </h2>
      <p>
        <span>Overview:</span>
        {"" + movie.overview}
      </p>
      <p>
        <span>Release date:</span>
        {"" + dte.toLocaleDateString()}
      </p>
    </div>
  );
};
