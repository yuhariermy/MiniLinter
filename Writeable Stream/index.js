const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("listItem.txt"),
});

const fileStream = fs.createWriteStream("createNewItemList.txt");

const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
};

myInterface.on("line", transformData);
