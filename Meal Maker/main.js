const menu = {
  _course: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this.appetizers;
  },
  set appetizers(appetizersIn) {
    this.appetizers = appetizersIn;
  },
  get mains() {
    return this.mains;
  },
  set mains(mainsIn) {
    this.mains = mainsIn;
  },
  get desserts() {
    return this.desserts;
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },
  get course() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._course[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    // const dishes = this._course.map(course=> {
    //   return this._course[courseName]
    // })
    const dishes = this._course[courseName];
    const dishesIndex = Math.floor(Math.random() * dishes.length);
    return dishes[dishesIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    // console.log(appetizer)
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    // console.log(totalPrice)

    return `The ${appetizer.name} is $${appetizer.price}
  The ${main.name} is $${main.price}
  The ${dessert.name} is $${dessert.price}
  The Total you spent is $${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "sambals", 4000);
menu.addDishToCourse("appetizers", "sambalss", 4000);
menu.addDishToCourse("appetizers", "sambalsss", 4000);

menu.addDishToCourse("mains", "main", 5000);
menu.addDishToCourse("mains", "mainss", 6000);
menu.addDishToCourse("mains", "mainsss", 7000);

menu.addDishToCourse("desserts", "desserts", 5000);
menu.addDishToCourse("desserts", "dessertss", 6000);
menu.addDishToCourse("desserts", "dessertsss", 7000);

let meal = menu.generateRandomMeal();

console.log(meal);
console.log(menu._course);
