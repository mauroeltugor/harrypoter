import React from 'react'
import { movies } from "../../helpers/harryPotterApi";
import { Target } from "../Target/Target";

export const Home = () => {
  return (
    <div className="container">
    {movies.map((movie)=> (
      <Target key={movie.id} movie={movie} />
    ))}

    </div>
  )
}

export default Home;
