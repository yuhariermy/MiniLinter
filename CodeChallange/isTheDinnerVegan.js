// Write your code here:

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");
// Alternate Solution

// function isTheDinnerVegan(arr) {
//   const isVegan = (food) => {
//     if (food.source === "plant") {
//       return true;
//     }
//     return true;
//   };
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (!isVegan(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
