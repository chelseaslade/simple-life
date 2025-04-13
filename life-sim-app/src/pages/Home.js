import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
      <div className="container">
      <div className="Home">
        <Link to="/new-game"><button id="NewGameButton">New Game</button></Link>
        </div>
        </div>
      </>
      );
    };

    export default Home;