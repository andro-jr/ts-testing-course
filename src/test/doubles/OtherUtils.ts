import {
  calculateComplexity,
  OtherStringUtils,
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

  describe("Tracking callbacks", () => {
    let cbArgs: string[];
    let timesCalled: number;

    function callBackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    beforeEach(() => {
      cbArgs = [];
      timesCalled = 0;
    });

    it("ToUpperCase - calls callback for invalid argument", () => {
      const actual = toUpperCaseWithCb("", callBackMock);

      expect(actual).toBeUndefined;
      expect(cbArgs).toContain("Invalid Argument");
      expect(timesCalled).toBe(1);
    });

    it("ToUpperCase - calls callback for invalid argument", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);

      expect(actual).toBeUndefined;
      expect(cbArgs).toContain("called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

  describe("Tracking callbacks with Jest mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("ToUpperCase - calls callback for invalid argument", () => {
      const actual = toUpperCaseWithCb("", callBackMock);

      expect(actual).toBeUndefined;
      expect(callBackMock).toHaveBeenCalledWith("Invalid Argument");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("ToUpperCase - calls callback for invalid argument", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);

      expect(actual).toBeUndefined;
      expect(callBackMock).toHaveBeenCalledWith("called function with abc");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe.only("OtherUtils test suite", () => {
    describe("OtherStringUtils tests with spies", () => {
      let sut: OtherStringUtils;

      beforeEach(() => {
        sut = new OtherStringUtils();
      });

      test("Use a spy to track calls", () => {
        const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
        sut.toUpperCase("asa");
        expect(toUpperCaseSpy).toHaveBeenCalledWith("asa");
      });

      test("Use a spy to track calls to other modules", () => {
        const consoleLogSpy = jest.spyOn(console, "log");
        sut.logString("asa");
        expect(consoleLogSpy).toHaveBeenCalledWith("asa");
      });

      test("Use a spy to replace the Implementation of a method", () => {
        jest.spyOn(sut, "callExternalServices").mockImplementation(() => {
          console.log("calling mocked implementation");
        });
        sut.callExternalServices();
      });
    });
  });
});
