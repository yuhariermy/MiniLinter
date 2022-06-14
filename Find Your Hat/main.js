const prompt = require("prompt-sync")({ sigint: true });
const clearScreen = require("clear-screen");

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.start = {
      x: 0,
      y: 0,
    };
    this.hatPos = {
      x: 0,
      y: 0,
    };
    this.locationX = 0;
    this.locationY = 0;
  }

  // Give a random position on the field
  // outside set as "off-limit" position
  setPos(offLimit = { x: 0, y: 0 }) {
    const pos = {
      x: 0,
      y: 0,
    };
    do {
      pos.x = Math.floor(Math.random() * this.field[0].length);
      pos.y = Math.floor(Math.random() * this.field.length);
    } while (pos.x === offLimit.x && pos.y === offLimit.y);
    return pos;
  }

  //  Set the Initial * as the starting random position
  setStart() {
    this.start = this.setPos();
    this.locationX = this.start.x;
    this.locationY = this.start.y;
    this.field[this.locationY][this.locationX] = pathCharacter;
  }

  //   set the Hat or the goal location random
  setHat() {
    this.hatPos = this.setPos(this.start);
    this.field[this.hatPos.y][this.hatPos.x] = hat;
  }

  runGame(hard = false) {
    // Set the starting position
    this.setStart();

    // Set the hat location
    this.setHat();

    let playing = true;
    while (playing) {
      this.print();
      this.getInput();

      if (!this.isInBounds()) {
        console.log("Out of bounds instruction.");
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log("Sorry, you fell down a hole.");
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log("Congrats, you found your hat!");
        playing = false;
        break;
      }

      // For hard mode, determine whether to
      // generate more holes on this turn
      if (hard) {
        if (Math.random() > 0.2) {
          this.addHoles();
        }
      }

      // Update current location on map
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  print() {
    clearScreen();
    this.field.forEach((element) => console.log(element.join("")));
  }
}

const myField = new Field(Field.generateField(10, 10, 0.2), true);
myField.runGame(true);
