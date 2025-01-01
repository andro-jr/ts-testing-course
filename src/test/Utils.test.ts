import { getStringInfo, toUppercase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of a valid string", () => {
    // arrange
    const sut = toUppercase;
    const expected = "ABC";

    // act
    const actual = toUppercase("abc");

    // assert
    expect(actual).toBe("ABC");
  });

  describe("getStringInfo for arf My-String should", () => {
    it("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });
    it("return lowercase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });
    it("return uppercase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    it("return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
    });
    it("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toBeDefined();
    });
  });
});
