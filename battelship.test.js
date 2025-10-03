const { ship } = require("./battelship");

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
