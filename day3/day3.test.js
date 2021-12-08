const {
  transpose,
  powerConsumption,
  oxygenGeneratorRating,
  co2ScrubberRating,
  lifeSupportRating,
  leastCommonBitSequence,
} = require("./utils");

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

describe("oxygen generator rating", () => {
  const tests = [
    {
      name: "returns for 1 line",
      input: `00100`,
      expected: 4,
    },
    {
      name: "returns for 3 lines",
      input: `00100
11110
10110
`,
      expected: 30,
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
      expected: 23,
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(oxygenGeneratorRating(test.input)).toEqual(test.expected);
    });
  });
});

describe("co2 scrubber rating", () => {
  const tests = [
    {
      name: "returns for 1 line",
      input: `00100`,
      expected: 4,
    },
    {
      name: "returns for 3 lines",
      input: `00100
11110
10110
`,
      expected: 4, //00100
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
      expected: 10, //01010
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(co2ScrubberRating(test.input)).toEqual(test.expected);
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

describe("least common", () => {
  const tests = [
    {
      name: "returns for 1 line",
      input: [[0, 0, 1, 0, 0]],
      expected: "00100",
    },
    {
      name: "returns for 3 lines",
      input: [
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
      ],
      expected: "00100",
    },
    {
      name: "returns for example lines",
      input: [
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
      ],
      expected: "01010",
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      expect(leastCommonBitSequence(test.input)).toEqual(test.expected);
    });
  });
});
