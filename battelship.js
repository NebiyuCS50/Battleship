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
    this.missedAttacks = [];
  }
  placeShip(length, x, y) {
    const newShip = new ship(length);
    this.ships.push({ ship: newShip, position: { x, y } });
  }
  receiveAttack(x, y) {
    const targetShip = this.ships.find(
      (s) => s.position.x === x && s.position.y === y
    );
    if (targetShip) {
      targetShip.ship.hit();
      return "Hit";
    } else {
      this.missedAttacks.push({ x, y });
      return "Miss";
    }
  }
}

module.exports = { ship, gameBoard };
