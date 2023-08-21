const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  const newShape = new Circle();
  let shapeColorInput = "red";
  newShape.setColor(shapeColorInput);
  expect(newShape.createShape()).toEqual(
    `<circle cx="50%" cy="50%" r="150" height="50%" width="50%" fill="${shapeColorInput}"></circle>`
  );
});

describe("Triangle", () => {
  const newShape = new Triangle();
  let shapeColorInput = "red";
  newShape.setColor(shapeColorInput);
  expect(newShape.createShape()).toEqual(
    `<polygon height="50%" width="50%" points="0,200 300,200 150,0" fill="${shapeColorInput}"></polygon>`
  );
});

describe("Square", () => {
  const newShape = new Square();
  let shapeColorInput = "red";
  newShape.setColor(shapeColorInput);
  expect(newShape.createShape()).toEqual(
    `<rect x="50" height="300" width="300" fill="${shapeColorInput}"></rect>`
  );
});
