import React, { useState } from "react";
import { destroyCard} from '../services/cardService'

export function CardPreview({ term, definition, id, onRemove }) {
  const [isFront, setIsFront] = useState(true)
  function handleCardFlip() {
    setIsFront(current => !current)
  }
  function handleDelete() {
    const confirm = window.confirm(
      `Are you sure you wish to delete "${term}"?`
    );
    if (confirm) {
      destroyCard(id).then(() => {
        onRemove && typeof onRemove === "function" && onRemove(id);
        // notify parent component
        onRemove(id);
      })
    }
  }

  return (
    <div className={`tile ${isFront ? '' : 'back'}`} >
      <h4 className="cardTerm">{isFront ? term : definition}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? "Show back" : "Show Front"}
        </button>
        <div>
          <button type="button" className="secondary">
            Edit
          </button>
          <button type="button" className="secondary danger" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}