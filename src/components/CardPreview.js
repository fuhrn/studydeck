import React, {useState} from "react";

export function CardPreview({ term, definition }) {
  const [isFront, setIsFront] = useState(true)
  function handleCardFlip() {
    setIsFront(current => !current)
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
          <button type="button" className="secondary danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}