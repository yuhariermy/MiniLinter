// Write your code here:

const convertToBaby = (arr) => {
  // return arr.map(word => `baby ${word}`)
  let converted = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    converted.push(`baby ${arr[i]}`);
    // console.log(converted)
  }
  return converted;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
