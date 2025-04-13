import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";  
import About from "./pages/About";
import Social from "./pages/Social"; 
import NewGame from "./pages/NewGame";
import { PersonProvider } from "./context/PersonContext"; 
import GameDisplay from "./pages/GameDisplay";

function App() {
  return (
    <PersonProvider>
      <Router basename="/simple-life">
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/social" element={<Social />} /> 
      <Route path="/new-game" element={<NewGame />} />
      <Route path="/game" element={<GameDisplay />} />
    </Routes>
    <Footer />
  </div>
  </Router>
  </PersonProvider>
  );
}

export default App;