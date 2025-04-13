import React, { useContext } from "react";
import { PersonContext } from "../context/PersonContext";
import { useNavigate } from "react-router-dom"; 

function DeleteCharacter() {
    const navigate = useNavigate();
    const { person, setPerson } = useContext(PersonContext);

    const deleteCharacter = async () => {
        console.log("Person in DeleteCharacter:", person, "Person ID: " + person.id);
        if (!person) {
            console.error("No person to delete.");
            return;
          }
      
          const response = await fetch(`http://localhost:8080/api/people/delete/${person.id}`, {
            method: "DELETE",
          });

          response.ok ? setPerson(null) : console.error("Failed to delete character.");
    }

    return (
        <div className="DeleteCharacter">
        <h3>End Current Run</h3>
        <button onClick={() => {
            navigate("/new-game");  
            deleteCharacter();  
        }}>
            Delete
        </button>
        </div>
    );
}

export default DeleteCharacter;