// src/App.js

import React from "react";
import PlayersList from "./playerList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Players</h1>
      </header>
      <main>
        <PlayersList />
      </main>
    </div>
  );
};

export default App;
