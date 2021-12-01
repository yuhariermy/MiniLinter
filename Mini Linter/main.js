let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// to make a new array of word based on story
const storyWords = story.split(" ");
console.log(`The Numbers of word on story is : ${storyWords.length}`);

// to filter unnecessaryWords
const betterWords = storyWords.filter((word) => {
  return unnecessaryWords.includes(word) ? false : true;
});

// to know how many overused word from story
let numberOfReally = 0;
let numberOfVery = 0;
let numberOfBasically = 0;

const numberOfOverusedWords = betterWords.forEach((words) => {
  if (words === "really") {
    numberOfReally += 1;
  } else if (words === "very") {
    numberOfVery += 1;
  } else if (words === "basically") {
    numberOfBasically += 1;
  } else {
    return words;
  }
});

// to know how many sentence from story

let sentenceCount = 0;
const counterSentences = betterWords.filter((word) => {
  if (word.includes(".") || word.includes("!")) {
    sentenceCount += 1;
  }
});

// console.log(sentenceCount)

const logInfo = () => {
  console.log("The better words count is: " + betterWords.length);
  console.log(`Sentence count is : ${sentenceCount}`);
  console.log(
    `The count of overused words: \n really : ${numberOfReally},\n very : ${numberOfVery}, \n basically : ${numberOfBasically} `
  );
};

logInfo();

console.log(betterWords.join(" "));
