const { transpose, powerConsumption } = require("./utils");

describe("transpose", () => {
  const tests = [
    {
      name: "test1",
      input: [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ],
      expected: [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
      ],
    },
    {
      name: "test2",
      input: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
      expected: [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4],
      ],
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(transpose(test.input)).toEqual(test.expected);
    });
  });
});

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
