class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(newCheckedOut) {
    return (this._isCheckedOut = newCheckedOut);
  }
  get ratings() {
    return this._ratings;
  }
  toogleCheckOutStatus() {
    return (this._isCheckedOut = !this._isCheckedOut);
  }

  getAverageRating() {
    return (
      this.ratings.reduce((accumulator, rating) => accumulator + rating) /
      this.ratings.length
    );
  }

  addRating(value) {
    return this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "A Shor History of Nearly",
  "Bill Bryson",
  544
);
historyOfEverything.toogleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toogleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
