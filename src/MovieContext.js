import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10€",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "10€",
      id: 23566124,
    },
    {
      name: "Inception",
      price: "10€",
      id: 23542,
    },
  ]);

  const changeHarry = () => {
    setMovies([
      {
        name: "I workz",
        price: "10€",
        id: 23,
      },
      {
        name: "I do for real",
        price: "10€",
        id: 24,
      },
    ]);
  };

  return (
    <MovieContext.Provider value={[movies, setMovies, changeHarry]}>
      {props.children}
    </MovieContext.Provider>
  );
};
