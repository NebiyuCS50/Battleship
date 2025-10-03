class ship {
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

class gameBoard {
  constructor() {
    this.ships = [];
  }
  placeShip(length, x, y) {
    const newShip = new ship(length);
    this.ships.push({ ship: newShip, position: { x, y } });
  }
}

module.exports = { ship, gameBoard };
