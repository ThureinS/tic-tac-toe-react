import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            placeholder="enter your name"
            value={playerName}
            onChange={handleChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
