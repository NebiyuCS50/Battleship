const { ship, player } = require("./battelship");

test("Ship hit method increases hit count", () => {
  const myShip = new ship(3);
  myShip.hit();
  expect(myShip.hitCount).toBe(1);
});

test("Ship isSunk method returns false when not sunk", () => {
  const myShip = new ship(3);
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
});

test("Ship isSunk method returns true when sunk", () => {
  const myShip = new ship(2);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});

const a = new player("A");
const b = new player("B");
a.placeShip(2, 2, 2);
b.placeShip(2, 1, 1);

test("b attack a", () => {
  expect(b.attack(a, 2, 2)).toBe("Hit");
});
