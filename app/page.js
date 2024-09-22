import React from 'react';
import Header from "./header";
import Grid from "./grid";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="line"></div>
      <Grid />
    </div>
  );
}

export default Home;
