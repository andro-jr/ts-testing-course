import { PasswordChecker } from "../../app/pass_checker/PasswordCheckers";

describe("PasswordChecker class test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("should do nothing at the moment", () => {
    sut.checkPassword();
  });
});
