import React, { useContext } from "react";
import { PersonContext } from "../context/PersonContext";
import AgeUp from "../components/AgeUp";
import DeleteCharacter from "../components/DeleteCharacter";

function GameDisplay() {

    const { person } = useContext(PersonContext);

  return (
    <div className="GameDisplay">
      <h3>{person.firstName} {person.surname}</h3>
      <p>Age: {person.age}</p>
      <AgeUp />
      <DeleteCharacter />
    <div className="StatsBox">
      <h3>Character Stats</h3>
      <p>Happiness: {person.happiness}</p>
      <p>Health: {person.health}</p>
      <p>Money: ${person.funds}</p>
      <p>Education: {person.education}</p>
      <p>Job: {person.job}</p>
      <p>Relationship Status: {person.relationshipStatus}</p>
      </div>
</div>
  );
}

export default GameDisplay;
