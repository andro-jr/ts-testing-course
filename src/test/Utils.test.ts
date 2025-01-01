import { getStringInfo, StringUtils, toUppercase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils test", () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
      console.log("setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("should return upperCase", () => {
      const actual = sut.toUpperCase("abc");

      console.log("Actual test");

      expect(actual).toBe("ABC");
    });
  });

  it("should return uppercase of a valid string", () => {
    // arrange
    const sut = toUppercase;
    const expected = "ABC";

    // act
    const actual = toUppercase("abc");

    // assert
    expect(actual).toBe("ABC");
  });

  describe.only("toUpperCase examples", () => {
    it.each([
      {
        input: "abc",
        expected: "ABC",
      },
      {
        input: "my-string",
        expected: "MY-STRING",
      },
      {
        input: "def",
        expected: "DEF",
      },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUppercase(input);
      expect(actual).toBe(expected);
    });
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
