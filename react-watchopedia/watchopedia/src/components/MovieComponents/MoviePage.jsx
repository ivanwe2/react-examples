import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { moviesList: ["Die Hard", "Harry Potter"] };
  });

  function handleAddMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        ...prevState,
        moviesList: prevState.moviesList.concat([newMovie]),
      };
    });
  }
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList moviesList={movieState.moviesList} />
    </div>
  );
};

export default MoviePage;
