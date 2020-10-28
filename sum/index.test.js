const sum = require("./index");

test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);
  const expectData = 3;
  expect(result).toBe(expectData);
});
