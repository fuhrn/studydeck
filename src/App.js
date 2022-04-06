import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { Practice } from "./components/Practice";
import "./normalize.css";
import "./App.css";
import { getCards } from './services/cardService'
import { CardList } from "./components/CardList";

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
  
  function handleRemove(id) {
    setCards(existing => existing.filter(c => c.id !== id))
  }

  function handleAdd(card) {
    setCards(existing => [...existing, card])
  }

  function handleUpdate(card) {
    setCards(existing => existing.map(c => c.id === card.id ? card : c))
  }

  return (
    <div>
      <div>
        <header>
          <h1>
            Study<span className="titleHighlight">Deck</span>
          </h1>
          <h2>Retention through repitition</h2>
        </header>
        <main>
          <Router>
            <CardList
              path="/"
              cards={cards}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
            <Practice path="/practice" cards={cards} />
          </Router>
        </main>
      </div>
    </div>
  )

}

export default App;
