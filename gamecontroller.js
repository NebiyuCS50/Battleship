import { player, ship } from "./battelship.js";

let human, computer;
let maxMoves = 20;
let movesLeft = maxMoves;

const boardElement = document.querySelector("#computer-board");
const newGameBtn = document.querySelector("#new-game");
const movesDisplay = document.querySelector("#moves-left");

const difficultyButtons = document.querySelectorAll("#difficulty button");

difficultyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const level = btn.dataset.level;
    switch (level) {
      case "easy":
        maxMoves = 20;
        break;
      case "medium":
        maxMoves = 10;
        break;
      case "hard":
        maxMoves = 6;
        break;
    }
    startGame();
  });
});

function startGame() {
  human = new player("You");
  computer = new player("Computer");

  movesLeft = maxMoves;
  movesDisplay.textContent = `Moves left: ${movesLeft}`;

  boardElement.textContent = "";

  randomPlacement(computer.gameBoard);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;

      cell.addEventListener("click", () => {
        if (movesLeft <= 0) return;

        const result = human.attack(computer, x, y);

        if (result === "Hit") {
          cell.classList.add("hit");
        } else {
          cell.classList.add("miss");
          movesLeft--;
          movesDisplay.textContent = `Moves left: ${movesLeft}`;
        }

        cell.style.pointerEvents = "none";

        if (computer.gameBoard.allShipsSunk()) {
          setTimeout(() => alert("🎉 You sank all enemy ships!"), 100);
        } else if (movesLeft === 0) {
          setTimeout(() => alert("💥 Out of moves! Game over."), 100);
        }
      });

      boardElement.appendChild(cell);
    }
  }
}

newGameBtn.addEventListener("click", startGame);

startGame();

function randomPlacement(board) {
  const shipLengths = [1, 2, 3, 4, 5, 6];

  for (let length of shipLengths) {
    let placed = false;

    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const horizontal = Math.random() < 0.5;

      if (horizontal && x + length > 10) continue;
      if (!horizontal && y + length > 10) continue;

      let overlap = false;
      for (let i = 0; i < length; i++) {
        const checkX = horizontal ? x + i : x;
        const checkY = horizontal ? y : y + i;

        if (
          board.ships.some((s) =>
            s.position.some((p) => p.x === checkX && p.y === checkY)
          )
        ) {
          overlap = true;
          break;
        }
      }

      if (!overlap) {
        const newShip = new ship(length);
        const positions = [];
        for (let i = 0; i < length; i++) {
          positions.push({
            x: horizontal ? x + i : x,
            y: horizontal ? y : y + i,
          });
        }
        board.ships.push({ ship: newShip, position: positions });
        placed = true;
      }
    }
  }
}
