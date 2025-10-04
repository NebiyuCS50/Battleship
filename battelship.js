export class ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }
  hit() {
    this.hitCount += 1;
  }
  isSunk() {
    if (this.hitCount >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export class gameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }
  placeShip(length, x, y) {
    const newShip = new ship(length);
    this.ships.push({ ship: newShip, position: { x, y } });
  }
  receiveAttack(x, y) {
    const targetShip = this.ships.find((s) =>
      s.position.some((p) => p.x === x && p.y === y)
    );

    if (targetShip) {
      targetShip.ship.hit();
      return "Hit";
    } else {
      this.missedAttacks.push({ x, y });
      return "Miss";
    }
  }
  allShipsSunk() {
    return this.ships.every((s) => s.ship.isSunk());
  }
}
export class player {
  constructor(name) {
    this.name = name || "player";
    this.gameBoard = new gameBoard();
  }
  placeShip(length, x, y) {
    this.gameBoard.placeShip(length, x, y);
  }
  attack(opponent, x, y) {
    return opponent.gameBoard.receiveAttack(x, y);
  }
  allShipsSunk() {
    return this.gameBoard.allShipsSunk();
  }
}
