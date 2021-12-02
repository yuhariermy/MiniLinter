let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return (randomNumber = Math.floor(Math.random() * 9));
};

const compareGuesses = (humanGuesses, computerGuesses, secretTargetNumber) => {
  let human = Math.abs(secretTargetNumber - humanGuesses);
  let computer = Math.abs(secretTargetNumber - computerGuesses);
  return (result = human > computer ? true : false);
};

const updateScore = (winner) => {
  return (result =
    winner === "human" ? (humanScore += 1) : (computerScore += 1));
};

const advanceRound = () => {
  return (currentNumber += 1);
};
