import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("DataBase test suite", () => {
  let sut: DataBase<someTypeWithId>;

  const fakeId = "1234";

  const someObj = {
    id: "",
    name: "someName",
    color: "someColor",
  };
  const someObj2 = {
    id: "",
    name: "someOtherName",
    color: "someColor",
  };

  beforeEach(() => {
    sut = new DataBase();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return id after insert", async () => {
    const actual = await sut.insert({ id: "" } as any);
    expect(actual).toBe(fakeId);
  });

  it("should get element after insert", async () => {
    const id = await sut.insert(someObj);

    const actual = await sut.getBy("id", id);
    expect(actual).toBe(someObj);
  });

  it("should find all", async () => {
    await sut.insert(someObj);
    await sut.insert(someObj2);

    const expected = [someObj, someObj2];
    const actual = await sut.findAllBy("color", "someColor");
    expect(actual).toEqual(expected);
  });

  it("should change color on update", async () => {
    const id = await sut.insert(someObj);
    const expectedColor = "someOtherColor";

    await sut.update(id, "color", expectedColor);

    const actual = await sut.getBy("id", id);
    expect(actual.color).toBe(expectedColor);
  });

  it("should delete element", async () => {
    const id = await sut.insert(someObj);
    await sut.delete(id);

    const actual = await sut.getBy("id", id);
    expect(actual).toBeUndefined();
  });
});
