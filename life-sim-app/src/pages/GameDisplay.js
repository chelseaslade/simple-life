import React, { useContext } from "react";
import { PersonContext } from "../context/PersonContext";
import AgeUp from "../components/AgeUp";

function GameDisplay() {

    const { person } = useContext(PersonContext);

  return (
    <div className="GameDisplay">
      <h2>{person.firstName} {person.surname}</h2>
      <p>Age: {person.age}</p>
      <AgeUp />
    </div>
  );
}

export default GameDisplay;
