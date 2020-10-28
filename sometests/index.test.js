const SuperObject = require("./index");

describe("matching superObject with global object", () => {
  const superObject = SuperObject("oppapa", 5);
  let globalSalary = 0;
  beforeEach(() => {
    globalSalary = 1000;
    superObject.setSum(1000);
  });

  afterEach(() => {
    globalSalary = 0;
  });

  test("test sum", () => {
    expect(superObject.sum(10)).toBe(1050);
  });

  test("test global sum", () => {
    expect(superObject.globalSum(10)).toBe(64);
  });
});
