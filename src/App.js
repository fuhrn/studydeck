import React, {useState, useEffect} from "react";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";
import {getCards} from './services/cardService'

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    // de esta manera el componente no sabe de donde saca la data, escondiendo los detalles de implementacion
    // ademas, puedo reutilizar ese servicio si algun otro component necesita consultar las cards
    getCards().then(setCards);
  }, []);
      // similar forma de escribir el ultimo .then()
      // .then((cards) => {
      //   setCards(cards);
      // })
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
