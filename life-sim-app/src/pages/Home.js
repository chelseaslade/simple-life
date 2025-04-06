import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
      <div class="container">
      <div className="Home">
        <Link to="/GameDisplay"><button id="NewGameButton">New Game</button></Link>
        </div>
        </div>
      </>
      );
    };

    export default Home;