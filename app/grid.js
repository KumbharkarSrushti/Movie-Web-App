import React from 'react';
import MovieItem from "./movieItem.js";

const Grid = () => {
  return (
    <>
      <div className="container">
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
      </div>
    </>
  );
};

export default Grid;