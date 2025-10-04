# Battleship

A web-based Battleship game built with JavaScript, HTML, and CSS, featuring difficulty levels and interactive gameplay. The game separates game logic from the UI, making it easy to maintain and extend.

## Features

- **Six ships** with lengths 1–6, randomly placed each game.
- **Difficulty levels:**
  - **Easy** → 20 moves
  - **Medium** → 10 moves
  - **Hard** → 6 moves
- **Moves only decrease on missed attacks.**
- **Visual feedback** for hits (red) and misses (white/blue).
- **New Game button** to restart the game at any time.
- **Alerts** when you sink all ships or run out of moves.
- **Fully separated logic and UI** for clean code structure.

## Getting Started

1.Clone the repository

```bash
git clone <your-repo-url>
cd battleship-game

```

2.Open index.html in a browser
No server required — just open the file in any modern browser.

## How to Play

1. Choose a difficulty level (Easy, Medium, Hard).
2. Click on the cells in the computer’s board to attack.
3. **Red cells** → Hit a ship.
4. **White/blue cells** → Miss.
5. Moves only decrease when you miss.
6. Sink all enemy ships before running out of moves to win.
7. Click **New Game** to restart at any time.

## Technologies Used

- HTML5

- CSS3 (Grid layout for boards, hover effects, responsive styling)

- JavaScript (ES6 classes for game logic)

## Future Improvements

- Add a human board and allow computer to attack back.

- Add ship orientation choice for the player.

- Add sound effects for hits and misses.

- Add mobile-friendly responsive layout.

- Add score tracking and high scores.

## Author

Nebiyu Elias
