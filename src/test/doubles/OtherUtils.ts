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

  describe.only("Tracking callbacks", () => {
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

  describe.only("Tracking callbacks with Jest mocks", () => {
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
});
