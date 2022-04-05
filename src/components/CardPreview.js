import React from "react";

export function CardPreview(props) {
  return (
    <div className="tile">
      <h4 className="cardTerm">{props.term}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary">
          Show back
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