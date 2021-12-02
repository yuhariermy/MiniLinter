const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else console.log("Error Input");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tied";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Win";
    } else {
      return "You Won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Win";
    } else {
      return "You Won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Win";
    } else {
      return "You Won";
    }
  }
};

console.log(determineWinner("rock", "scissors"));
