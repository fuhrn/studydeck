import React from "react";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";

function App() {
  return (
    <div>
      <header>
        <h1>
          Study <span className="titleHighlight">Deck</span>
        </h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
          <CardPreview term="What does a duck say?" />
          <CardPreview term="What does a dog say?" />
          <CardPreview term="What does a cow say?" />
        </div>
      </main>
    </div>
  );
}

export default App;
