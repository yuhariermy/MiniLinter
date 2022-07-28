//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding("utf8");
var util = require("util");
var input = "";

process.stdin.on("data", function (text) {
  input += text;
});

process.stdin.on("end", function () {
  //do your processing here.
  console.log(input);
});
