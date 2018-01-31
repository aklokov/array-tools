import { expect } from "chai";
import { uniqueBy } from "../src";

describe("uniqueBy", function (): void {
  it("should return items unique by single field", function (): void {
    // arrange
    const input = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const expected = [{ id: 1 }, { id: 2 }];

    // act
    const result = uniqueBy(input, item => item.id);

    // assert
    expect(result).to.be.deep.equal(expected);
  });

  it("should return items unique by field combination", function (): void {
    // arrange
    const input = [
      { id: 1, name: "1", last: "2" },
      { id: 1, name: "2", last: "2" },
      { id: 2, name: "1", last: "2" },
      { id: 3, name: "3", last: "3" },
      { id: 1, name: "2", last: "1" },
      { id: 2, name: "1", last: "4" }
    ];
    const expected = [
      { id: 1, name: "1", last: "2" },
      { id: 1, name: "2", last: "2" },
      { id: 2, name: "1", last: "2" },
      { id: 3, name: "3", last: "3" }
    ];

    // act
    const result = uniqueBy(input, item => item.id, item => item.name);

    // assert
    expect(result).to.be.deep.equal(expected);
  });
});
