// CSS
import "./App.css";
// REACT
import React from "react";
// COMPONENTS
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from './AddMovie'
// CONTEXT
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
