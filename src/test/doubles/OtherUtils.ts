import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  it("calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "some_info",
        field2: "some_info_2",
      },
    };
    const actual = calculateComplexity(someInfo);
    expect(actual).toBe(10);
  });

  it("ToUpperCase - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCb("", () => {});

    expect(actual).toBeUndefined;
  });

  it("ToUpperCase - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCb("abc", () => {});

    expect(actual).toBe("ABC");
  });
});
