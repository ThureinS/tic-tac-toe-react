import React from "react";

const Log = ({ turns }) => {
  return (
    <div>
      {turns.reverse().map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </div>
  );
};

export default Log;
