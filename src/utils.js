export let getAllGenres = (movies) => {
  var genres = new Set();
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      genres.add(genre);
    });
  });
  return genres;
};
