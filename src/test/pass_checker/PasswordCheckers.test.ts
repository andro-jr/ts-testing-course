import { PasswordChecker } from "../../app/pass_checker/PasswordCheckers";

describe("PasswordChecker class test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars should be invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual).toBe(false);
  });

  it("Password with more than 8 chars should be valid", () => {
    const actual = sut.checkPassword("123456Ab");
    expect(actual).toBe(true);
  });

  it("Password with no uppercase letter is invalid", () => {
    const actual = sut.checkPassword("12345bef");
    expect(actual).toBe(false);
  });

  it("Password with uppercase letter is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual).toBe(true);
  });

  it("Password with no lowercase letter is invalid", () => {
    const actual = sut.checkPassword("12345BEF");
    expect(actual).toBe(false);
  });

  it("Password with lowercase letter is valid", () => {
    const actual = sut.checkPassword("12345beF");
    expect(actual).toBe(true);
  });
});
