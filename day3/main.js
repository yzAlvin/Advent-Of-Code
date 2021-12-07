const { powerConsumption } = require("./utils");
const fs = require("fs");

var input = fs.readFileSync("input").toString();
var result = powerConsumption(input);
console.log(result);
