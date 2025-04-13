import React, { useContext } from "react";
import { PersonContext } from "../context/PersonContext";

function AgeUp() {
  const { person, setPerson } = useContext(PersonContext);
  console.log("Person in AgeUp:", person, "Person ID: " + person.id);

  const ageUpPerson = async () => {
    if (!person) {
      console.error("No person to age up.");
      return;
    }

    const response = await fetch(`http://localhost:8080/api/people/ageup/${person.id}`, {
      method: "PUT",
    });

    if (response.ok) {
      const updatedPerson = await response.json();
      setPerson(updatedPerson);
    } else {
      console.error("Failed to age up.");
    }
  };

  return (
    <div className="AgeUp">
      <button onClick={ageUpPerson}>Age Up</button>
    </div>
  );
}

export default AgeUp;
