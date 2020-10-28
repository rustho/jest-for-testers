const SuperObject = require("./index");

describe("matching cities to foods", () => {
  const superObject = SuperObject("oppapa", 5);
  let globalSalary = 0;
  beforeEach(() => {
    globalSalary = 1000;
  });

  afterEach(() => {
    globalSalary = 0;
  });

  test("city database has Vienna", () => {
    expect(superObject.sum(10)).toBeGreaterThan(3);
  });

  test("city database has San Juan", () => {
    expect(superObject.globalSum(10)).toBeGreaterThan(3);
  });
});
