import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(character)}>
      <img src={character.thumbnail} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.description || "No description available."}</p>
    </div>
  );
};

export default CharacterCard;
