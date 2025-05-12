import { useContext, useEffect, useState } from "react";
import { PersonContext } from "../context/PersonContext";
import GameView from "../pages/GameView";
import ageEvents from "../utils/AgeEvents";

function GameDisplay() {
  const { person, setPerson } = useContext(PersonContext); 
  const [gameLog, setGameLog] = useState([]);
  const [appliedAges, setAppliedAges] = useState([]);

  //Welcome Message
  useEffect(() => {
    if (person?.id && gameLog.length === 0) {
      console.log("Setting welcome message for:", person);
      setGameLog([
        `Welcome to the world, ${person.firstName}! Every life is unique, and we're about to follow along on your journey.`
      ]);
    }
  }, [person, gameLog.length]);

  //Age Events
  useEffect(() => {
  const age = person.age;
  if (ageEvents[age] && !appliedAges.includes(age)) {
    const event = ageEvents[age];
    setGameLog((prev) => [...prev, event.description]);

      // Apply stat changes
      async function fetchData() {
      if (event.statEffects) {
      const response = await fetch(`http://localhost:8080/api/people/`, {
      method: "PUT",
      headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...person,

    intelligence: person.intelligence + (event.statEffects?.intelligence || 0),
    happiness: person.happiness + (event.statEffects?.happiness || 0),
    health: person.health + (event.statEffects?.health || 0),
  }),
    });

    if (response.ok) {
      const updatedPerson = await response.json();
      setPerson(updatedPerson);
      setAppliedAges((prev) => [...prev, age]);
    } else {
      console.error("Failed to update stat.");
    }
      }
    }
    fetchData();
  }
}, [person, setPerson, appliedAges]);



  if (!person) {
    return <p>Loading character...</p>;
  }

  return (
    <GameView gameLog={gameLog} />
  );
}

export default GameDisplay;
