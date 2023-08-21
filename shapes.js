// Create Shape Class
class Shape {
  constructor(color) {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}
// Create Circle Class
class Circle extends Shape {
  createShape(shapeColorInput) {
    return `<circle cx="50%" cy="50%" r="150" height="50%" width="50%" fill="${shapeColorInput}"></circle>`;
  }
}
// Create Triangle Class
class Triangle extends Shape {
  createShape(shapeColorInput) {
    return `<polygon height="50%" width="50%" points="0,200 300,200 150,0" fill="${shapeColorInput}"></polygon>`;
  }
}
// Create Square Class
class Square extends Shape {
  createShape(shapeColorInput) {
    return `<rect x="50" height="300" width="300" fill="${shapeColorInput}"></rect>`;
  }
}

module.exports = { Circle, Triangle, Square };
