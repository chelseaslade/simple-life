import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";  
import GameDisplay from "./pages/GameDisplay";
import About from "./pages/About";
import Social from "./pages/Social"; 


function App() {
  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/GameDisplay" element={<GameDisplay />} />
      <Route path="/About" element={<About />} />
      <Route path="/Social" element={<Social />} /> 
    </Routes>
    <Footer />
  </div>
  );
}

export default App;