import React, {useContext} from "react";
import {MovieContext} from './MovieContext'

const Nav = () => {

  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: '2px solid green'}}>
      <h3>Lovro</h3>
      <p>List of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
