import { createContext, useState } from "react";
import { movies as Movies } from "./Movies";
export let MoviesContext = createContext();
export let MoviesProvider = ({ children }) => {
  let [movies, setMovies] = useState(Movies);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
