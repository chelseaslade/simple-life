import { useContext, useEffect, useState } from "react";
import { PersonContext } from "../context/PersonContext";
import GameView from "../pages/GameView";

function GameDisplay() {
  const { person } = useContext(PersonContext); 
  const [gameLog, setGameLog] = useState([]);

  useEffect(() => {
    if (person?.id && gameLog.length === 0) {
      console.log("Setting welcome message for:", person);
      setGameLog([
        `Welcome to the world, ${person.firstName}! Every life is unique, and we're about to follow along on your journey.`
      ]);
    }
  }, [person, gameLog.length]);

  if (!person) {
    return <p>Loading character...</p>;
  }

  return (
    <GameView gameLog={gameLog} />
  );
}

export default GameDisplay;
