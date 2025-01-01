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

  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});
    expect(actual.characters).toHaveLength(9);
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
    expect(actual.characters).toEqual(
      expect.arrayContaining(["M", "y", "S", "t", "r", "i", "n", "g"])
    );
    expect(actual.characters).toContain<string>("M");
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
