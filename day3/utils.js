const transpose = (matrix) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]));

Array.prototype.count = function (searchVal) {
  return this.filter((x) => x === searchVal).length;
};

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

const normaliseInput = (input) =>
  input
    .split("\n")
    .filter((r) => r)
    .map((r) => r.split("").map((d) => parseInt(d)));

module.exports = {
  transpose,
  powerConsumption,
};
