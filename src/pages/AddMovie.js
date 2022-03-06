import { useContext } from "react";
import { MoviesContext } from "../MovieContext";
import { getAllGenres } from "../utils";
import { v4 as uuid } from "uuid";

export let AddMovie = () => {
  function getSelectedValue(field) {
    const selectedOpts = [...field.options]
      .filter((x) => x.selected)
      .map((o) => o.value);
    return selectedOpts;
  }
  let hndlSub = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuid(),
      title: e.target.title.value,
      overview: e.target.overviewInp.value,
      release_date: e.target.dateInp.value,
      poster: e.target.posetInp.value,
      genres: getSelectedValue(e.target.genreInp),
    };
    setMovies([...movies, newMovie]);

    console.log(newMovie);
    console.log(movies);

    // e.target.reset();
  };
  var { movies, setMovies } = useContext(MoviesContext);
  const gnr = [...getAllGenres(movies)];

  return (
    <section>
      <form action="" onSubmit={hndlSub}>
        <div className="flx">
          <label htmlFor="titleInp">
            Title:
            <input type="text" name="title" placeholder="movie title" />
          </label>
          <label htmlFor="overviewInp">
            Overview:
            <textarea
              type="text"
              name="overviewInp"
              id="overviewInp"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="dateInp">
            Release Date:
            <input type="date" name="dateInp" />
          </label>
          <label htmlFor="posetInp">
            Poster Url:
            <input type="text" name="posetInp" id="posetInp" />
          </label>
          <label htmlFor="genreInp">
            Genres:
            <select name="genres" id="genreInp" multiple>
              {gnr.map((g) => {
                return <option>{g}</option>;
              })}
            </select>
          </label>
          <button type="submit">Add movie</button>
        </div>
      </form>
    </section>
  );
};
