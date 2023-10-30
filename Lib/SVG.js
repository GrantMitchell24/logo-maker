class SVG {
  constructor() {
    this.text = "" // able to choose text and text color within the text tag
    this.shape = "" // choose shape tag which decides its color through shape class
  }

  setShape(chosenShape) {
    this.shape = choseShape.render()
  }

  chooseText(chosenText, ChosenColor) {
    this.text`<text x ="150" y="125" font-size="60" text-anchor="middle" fill ="${chosenColor}">${chosenText}</text>`
  }
  build() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.text}</svg>`
  }
}

module.exports = { svg } 