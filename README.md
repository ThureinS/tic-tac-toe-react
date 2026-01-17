# React Tic-Tac-Toe

This is a classic Tic-Tac-Toe game built with **React** and **Vite**. It features a dynamic and interactive game board, real-time player switching, and a log of game turns.

> [!NOTE]
> This is a learning project created for educational purposes. It comes with **no license**.

## Features

- **Interactive Game Board**: A 3x3 grid where players can click to place their symbols (X or O).
- **Player Name Customization**: Both "Player 1" (X) and "Player 2" (O) names are editable in real-time.
- **Turn-based Logic**: The game automatically handles player turns and prevents overwriting existing moves.
- **Winner Detection**: Automatically detects and announces a winner when a winning combination is achieved.
- **Draw Detection**: Identifies a draw when all squares are filled without a winner.
- **Game Log**: displays a history of all moves made during the current game session.
- **Game Over Screen**: Displays the result (Winner or Draw) and offers a "Rematch" button to reset the board.
- **Polished UI**: Visual highlighting for the active player.

## Technologies Used

- **React** (v19)
- **Vite** (for fast development and building)
- **JavaScript** (ES Modules)
- **CSS** (for styling)

## Installation & Usage

1.  **Clone the repository** (if applicable) or download the source code.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/components/`: Contains React components (`Player`, `GameBoard`, `Log`, `GameOver`).
- `src/App.jsx`: Main application component used to manage game state (turns, active player) and derive game results (winner, draw).
- `src/winning-combinations.js`: Defines the logic/coordinate combinations for winning the game.
