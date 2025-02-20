jest.mock("../../app/doubles/OtherUtils.ts", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils.ts"),
  calculateComplexity: () => {
    return 10;
  },
}));

jest.mock("uuid", () => ({
  v4: () => 123,
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    console.log("result :", result);
  });
  test("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });
  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("abc");
    console.log("result :", result);
    expect(result).toBe("ABC123");
  });
});
