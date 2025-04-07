
import React from "react";
import CreatePerson from "../components/CreatePerson";

const NewGame = () => {
  return (
    <div className="GameDisplay">
      <h3>Start a New Game</h3>
      <CreatePerson />
    </div>
  );
};

export default NewGame;
