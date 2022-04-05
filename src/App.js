import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>StudyDeck</h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div>
          <div>
            <h4>Term goes here</h4>
            <div>
              <button type="button">Show back</button>
              <button type="button">Edit</button>
              <button type="button">delete</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
