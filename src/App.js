import React, {useState, useEffect} from "react";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch("https://adaptive-basilisk.glitch.me/api/card")
      .then((res) => res.json())
      // similar forma de escribir el siguiente .then()
      // .then((cards) => {
      //   setCards(cards);
      // })
      .then(setCards)
  }, [])
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
        {/* <pre>{JSON.stringify(cards, null, 2)}</pre> */}
        <div className="gridContainer">
          {cards.map(({id, definition, term}) => (
            <CardPreview key={id} definition={definition} term={term} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
