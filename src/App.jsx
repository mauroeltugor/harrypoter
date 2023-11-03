import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import Kart from "./components/Kart/Kart";

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/kart" element={<Kart />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
