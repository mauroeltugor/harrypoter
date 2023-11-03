import { Routes, Route } from "react-router-dom";

import { movies } from "./helpers/harryPotterApi";

import { Header } from "./components/Header/Header";
import  Kart  from "./components/Kart/Kart";
import Home from "./components/Home/Home"



import './App.css'

function App() {

  console.log(movies);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/kart" element={<Kart/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
