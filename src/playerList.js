// src/PlayersList.js

import React from "react";
import Player from "./player";
import players from "./players";
import "./playersList.css"; // Import specific CSS for PlayersList component

const PlayersList = () => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
