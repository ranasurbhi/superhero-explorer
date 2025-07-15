import React from "react";
import "./Modal.css";

const Modal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <img src={character.thumbnail} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.description || "No description available."}</p>

        {character.comics?.items?.length > 0 && (
          <div className="comics-section">
            <h4>Comics:</h4>
            <ul>
              {character.comics.items.slice(0, 5).map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
