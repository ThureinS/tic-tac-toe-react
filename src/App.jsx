
function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <li className="player">
          <span className="player-name">Player 1</span>
          <span className="player-symbol">X</span>
        </li>
        <li className="player">
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
        </li>
      </ol>
      Game Board
    </div>
  )
}

export default App
