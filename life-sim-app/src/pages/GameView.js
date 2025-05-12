
import AgeUp from "../components/AgeUp";
import DeleteCharacter from "../components/DeleteCharacter";
import { PersonContext } from "../context/PersonContext";
import { useContext } from "react";

function GameView({gameLog = []}) {
  const { person } = useContext(PersonContext);
  console.log("GameLog in GameView:", gameLog);


  return (
    <div className="GameContainer">
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
      <p>Appearance: {person.appearance}</p>
      <p>Intelligence: {person.intelligence}</p>
      </div>
      </div>
      <div className="GameText">
        <h3>Gameplay</h3>
        <div className="ChatLog">
          {gameLog.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
</div>
  );
}

export default GameView;
