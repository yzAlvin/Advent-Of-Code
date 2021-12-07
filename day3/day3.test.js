const { transpose, powerConsumption } = require("./utils");

describe("transpose", () => {
  it("test1", () => {
    const input = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    const expected = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ];
    const actual = transpose(input);
    expect(actual).toEqual(expected);
  });
  it("test1", () => {
    const input = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ];
    const expected = [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
    ];
    const actual = transpose(input);
    expect(actual).toEqual(expected);
  });
});

describe("power consumption", () => {
  it("returns for 1 line", () => {
    var input = `00100`;
    var expected = 4 * 27;
    var actual = powerConsumption(input);
    expect(actual).toEqual(expected);
  });
  it("returns for 3 lines", () => {
    var input = `00100
11110
10110
`;
    var expected = 22 * 9; // 10110
    var actual = powerConsumption(input);
    expect(actual).toEqual(expected);
  });
  it("returns for example lines", () => {
    var input = `00100
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
`;
    var expected = 22 * 9; // 10110
    var actual = powerConsumption(input);
    expect(actual).toEqual(expected);
  });
});
