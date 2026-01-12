import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? `${winner} wins!` : "It's a draw!"}</p>
      <button>Play Again</button>
    </div>
  );
};

export default GameOver;
