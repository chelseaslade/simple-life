import React, { useState } from "react";

function CreatePerson() {
  const [person, setPerson] = useState({ firstName: "", surname: "", gender: ""});
  const [createdPerson, setCreatedPerson] = useState(null);

  const createPerson = async () => {
    console.log("Sending person:", person);

    const response = await fetch("http://localhost:8080/api/people", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    });
    const newPerson = await response.json();
    setCreatedPerson(newPerson);
  };

  return (
    <div className="CreatePersonForm">
      <input
        type="text"
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        value={person.surname}
        onChange={(e) => setPerson({ ...person, surname: e.target.value })}
        placeholder="Surname"
      />
      <input
      type="text"
      value={person.gender}
      onChange={(e) => setPerson({...person, gender: e.target.value})}
      placeholder="Gender (Male/Female)" />
      <button onClick={createPerson}>Generate Person</button>


      {createdPerson && (
        <div className="CreatedPerson">
          <p>Generated Person Stats</p>
        <ul><li>Name: {createdPerson.firstName} {createdPerson.surname}</li>
        <li>Gender: {createdPerson.gender}</li>
         <li>Health: {createdPerson.health}</li>
         <li>Happiness: {createdPerson.happiness}</li>
         <li>Intelligence: {createdPerson.intelligence}</li>
         <li>Appearance: {createdPerson.appearance}</li>
         <li>Funds: ${createdPerson.funds}</li></ul>
         <button>Let's Play!</button>
      </div>)}
    </div>
  );
}

export default CreatePerson;
