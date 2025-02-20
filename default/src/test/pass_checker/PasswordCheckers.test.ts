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
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars should be valid", () => {
    const actual = sut.checkPassword("12345678");
    console.log("actual :", actual);
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("Password with no uppercase letter is invalid", () => {
    const actual = sut.checkPassword("abcdefgh");
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password with uppercase letter is valid", () => {
    const actual = sut.checkPassword("abcdefghIJ");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password with no lowercase letter is invalid", () => {
    const actual = sut.checkPassword("12345BEF");
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Password with lowercase letter is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Complex password is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual.reasons).toHaveLength(0);
    expect(actual.isValid).toBe(true);
  });

  it("Admin passwords with no number is invalid", () => {
    const actual = sut.checkAdminPassword("abcdEFGH");
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Admin passwords with number is valid", () => {
    const actual = sut.checkAdminPassword("abcdEFGH1");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
