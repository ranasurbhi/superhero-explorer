import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterGrid.css";

const CharacterGrid = ({ characters, onCardClick }) => {
  return (
    <div className="character-grid">
      {characters.length === 0 ? (
        <p className="no-results">No characters found.</p>
      ) : (
        characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={onCardClick}
          />
        ))
      )}
    </div>
  );
};

export default CharacterGrid;
