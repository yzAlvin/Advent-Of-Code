const transpose = (matrix) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]));

Array.prototype.count = function (searchVal) {
  return this.filter((x) => x === searchVal).length;
};

const normaliseInput = (input) =>
  input
    .split("\n")
    .filter((r) => r)
    .map((r) => r.split("").map((d) => parseInt(d)));

const powerConsumption = (input) => {
  const inputs = normaliseInput(input);
  const transposed = transpose(inputs);
  const gammaRate = transposed
    .map((r) => (r.count(1) > r.count(0) ? 1 : 0))
    .join("");
  const epsilonRate = gammaRate
    .split("")
    .map((r) => (r === "0" ? 1 : 0))
    .join("");
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

const oxygenGeneratorRating = (input) => {
  const inputs = normaliseInput(input);
  const mostCommonBits = mostCommonBitSequence(inputs);
  return parseInt(mostCommonBits, 2);
};

const co2ScrubberRating = (input) => {
  const inputs = normaliseInput(input);
  const leastCommonBits = leastCommonBitSequence(inputs);
  return parseInt(leastCommonBits, 2);
};

const lifeSupportRating = (input) =>
  co2ScrubberRating(input) * oxygenGeneratorRating(input);

const mostCommonBitSequence = (arrayOfBits) =>
  commonBitSequence(most, arrayOfBits);

const leastCommonBitSequence = (arrayOfBits) =>
  commonBitSequence(least, arrayOfBits);

const most = (head) => (head.count(1) >= head.count(0) ? 1 : 0);
const least = (head) => (head.count(1) < head.count(0) ? 1 : 0);

const commonBitSequence = (f, arrayOfBits) => {
  var potential = arrayOfBits;
  var i = 0;
  while (potential.length > 1) {
    var head = transpose(potential)[i];
    // bad naming
    var mostCommon = f(head);
    potential = potential.filter((p) => p[i] === mostCommon);
    i++;
  }
  return potential[0].join("");
};

module.exports = {
  transpose,
  powerConsumption,
  oxygenGeneratorRating,
  co2ScrubberRating,
  lifeSupportRating,
  leastCommonBitSequence,
};
