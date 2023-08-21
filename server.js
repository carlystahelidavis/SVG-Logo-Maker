const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

// Text Render Area
function getText(textInput, colorInput) {
  logoText = `<text x="150" y="150" text-anchor="middle" font-size="75" fill="${colorInput}">${textInput}</text>`;
  return logoText;
}
// Shape Render Area
function getShape(shapeInput, shapeColorInput) {
  let newShape;
  if (shapeInput === "square") {
    //Square
    newShape = new Square(shapeColorInput);
  } else if (shapeInput === "circle") {
    //Circle
    newShape = new Circle(shapeColorInput);
  } else {
    //Triangle
    newShape = new Triangle(shapeColorInput);
  }
  //Chooses the shape and then sets the color
  console.log(newShape);
  return newShape.createShape(shapeColorInput);
}

function getSVG(shape, text) {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape}${text}</svg>`;
}

inquirer
  .prompt([
    {
      type: "input",
      message: `Please enter the text of the logo (must be 3 characters or less)`,
      name: "logoText",
    },
    {
      type: "input",
      message: `What would you like the text color to be?`,
      name: "textColor",
    },
    {
      type: "list",
      message: `What would you like the shape to be?`,
      name: "logoShape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: `What would you like the shape color to be?`,
      name: "shapeColor",
    },
  ])

  .then((data) => {
    const textInput = data.logoText;
    const textColor = data.textColor;
    const shapeInput = data.logoShape;
    const shapeColor = data.shapeColor;
    const shape = getShape(shapeInput, shapeColor);
    const text = getText(textInput, textColor);
    const logoData = getSVG(shape, text);

    fs.writeFile("logo.svg", logoData, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
