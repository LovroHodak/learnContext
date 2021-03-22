import React, { useState, useContext } from "react";
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {
    const [movies, setMovies, changeHarry] = useContext(MovieContext)

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
      <button onClick={changeHarry}>Change Harry</button>
    </div>
  );
};

export default MovieList;
