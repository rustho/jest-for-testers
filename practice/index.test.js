import { initializeGrids } from "./index";

describe("test for life", () => {
  beforeEach(() => {});

  afterEach(() => {});

  test("test sum", () => {
    const arr = new Array(10).fill(0);
    expect(initializeGrids()).toBe(arr);
  });
});
