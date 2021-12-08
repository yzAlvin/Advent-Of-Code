const { powerConsumption, lifeSupportRating } = require("./utils");
const fs = require("fs");

var input = fs.readFileSync("input").toString();
var result = powerConsumption(input);
console.log(result);
var result2 = lifeSupportRating(input);
console.log(result2);
