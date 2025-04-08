import React, { useState } from "react";
import { useContext } from "react";
import { PersonContext } from "../context/PersonContext"; 
import { useNavigate } from "react-router-dom"; 

function CreatePerson() {

const navigate = useNavigate();

  const [localPerson, setLocalPerson] = useState({ firstName: "", surname: "", gender: ""});

  const [generatedPerson, setGeneratedPerson] = useState(null);
  const { setPerson } = useContext(PersonContext);

  const createPerson = async () => {
    console.log("Sending person:", localPerson);

    const response = await fetch("http://localhost:8080/api/people", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(localPerson),
    });

    const newPerson = await response.json();
    setPerson(newPerson); // Store in context for global use
    setGeneratedPerson(newPerson); 
  };

  return (
    <div className="CreatePersonForm">
      <input
        type="text"
        value={localPerson.firstName}
        onChange={(e) => setLocalPerson({ ...localPerson, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        value={localPerson.surname}
        onChange={(e) => setLocalPerson({ ...localPerson, surname: e.target.value })}
        placeholder="Surname"
      />
      <input
      type="text"
      value={localPerson.gender}
      onChange={(e) => setLocalPerson({...localPerson, gender: e.target.value})}
      placeholder="Gender (Male/Female)" />
      <button onClick={createPerson}>Generate Person</button>


      {generatedPerson && (
        <div className="CreatedPerson">
          <p>Generated Person Stats</p>
        <ul><li>Name: {generatedPerson.firstName} {generatedPerson.surname}</li>
        <li>Gender: {generatedPerson.gender}</li>
         <li>Health: {generatedPerson.health}</li>
         <li>Happiness: {generatedPerson.happiness}</li>
         <li>Intelligence: {generatedPerson.intelligence}</li>
         <li>Appearance: {generatedPerson.appearance}</li>
         <li>Funds: ${generatedPerson.funds}</li></ul>
         <button onClick={() => navigate("/game")}>Let's Play!</button>
      </div>)}
    </div>
  );
}

export default CreatePerson;
