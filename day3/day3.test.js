const { powerConsumption, lifeSupportRating } = require("./utils");

describe("power consumption", () => {
  const tests = [
    {
      name: "returns for 1 line",
      input: `00100`,
      expected: 4 * 27,
    },
    {
      name: "returns for 3 lines",
      input: `00100
11110
10110
`,
      expected: 22 * 9,
    },
    {
      name: "returns for example lines",
      input: `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`,
      expected: 22 * 9,
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(powerConsumption(test.input)).toEqual(test.expected);
    });
  });
});

describe("life support rating", () => {
  const tests = [
    {
      name: "returns for 1 line",
      input: `00100`,
      expected: 4 * 4,
    },
    {
      name: "returns for 3 lines",
      input: `00100
11110
10110
`,
      expected: 4 * 30, //00100
    },
    {
      name: "returns for example lines",
      input: `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`,
      expected: 10 * 23, //01010
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(lifeSupportRating(test.input)).toEqual(test.expected);
    });
  });
});
