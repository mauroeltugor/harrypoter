import { movies } from "./helpers/harryPotterApi";
import { Target } from "./components/Target/Target";
import { Header } from "./components/Header/Header";

import './App.css'

function App() {

  console.log(movies);

  return (
    <>
      <Header />
      <div className="container">
      {movies.map((movie)=> (
        <Target key={movie.id} movie={movie} />
      ))}

      </div>
    </>
  )
}

export default App
