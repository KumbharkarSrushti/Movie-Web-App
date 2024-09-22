// Grid.js
import React from 'react';
import MovieItem from "./movieItem";

const Grid = () => {
  return (
    <div className="grid-container">
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  );
};

export default Grid;
