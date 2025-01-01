import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordCheckers";

describe("PasswordChecker class test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars should be invalid", () => {
    const actual = sut.checkPassword("123");
    console.log("actual :", actual);
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars should be valid", () => {
    const actual = sut.checkPassword("12345678");
    expect(actual.isValid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  xit("Password with no uppercase letter is invalid", () => {
    const actual = sut.checkPassword("323");
    expect(actual).toBe(false);
  });

  xit("Password with uppercase letter is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual).toBe(true);
  });

  xit("Password with no lowercase letter is invalid", () => {
    const actual = sut.checkPassword("12345BEF");
    expect(actual).toBe(false);
  });

  xit("Password with lowercase letter is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual).toBe(true);
  });
});
