const multipaction = reqiure("./block18");
const concatOdds = reqiure("./block18");

describe("Multipaction Tests:", () => {
  test("2 * 3 should return 6", () => {
    expect(multipaction.product(2, 3)).toBe(6);
  });
});

describe("Odd only array:", () => {
  test("[3, 2, 1], [9, 1, 1, 1, 4, 15, -1] should return [-1, 1, 3, 9, 15]", () => {
    expect(concatOdds.concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toBe([
      -1, 1, 3, 9, 15,
    ]);
  });
});
