const inquirer = require("inquirer");
const { SVG } = require("./Lib/SVG.js");
const { Circle, Triangle, Square } = require("./Lib/shapes.js");
const fs = require("fs");

// command line interface, one method
class CLI {

  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message: "Enter 3 character text for the logo",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a color for the logo text",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"]
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a color for the shape background",
        },
      ])
      .then((response) => {
        let shape;
        if (response.shapeType === "circle") {
          shape === new Circle()
        }
        else if (response.shapeType === "square") {
          shape = new Square()
        }
        else if (response.shapeType === "triangle") {
          shape = new Triangle()
        }

        // wire class methods here: 
        shape.setColor(response.shapeColor)

        let svg = new SVG()
        svg.setShape(shape)
        svg.chooseText(response.text, response.textColor)
        return fs.writeFileSync("logo.svg", svg.build());
      })
      .then(() => {
        console.log("Generated Logo");
      })
  }
}

new CLI().run()

