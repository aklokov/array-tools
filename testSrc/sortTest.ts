import { expect } from "chai";
import { sort } from "../src";

describe("sort", function (): void {
  it("should return new array", function (): void {
    // arrange
    const input = [1, 2, 0];

    // act
    const result = sort(input);

    // assert
    expect(result === input).to.be.equal(false);
  });

  it("should return sorted array", function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];
    const expected = [{ level: 0 }, { level: 1 }, { level: 2 }];

    // act
    const result = sort(input, i => i.level);

    // assert
    expect(result).to.be.deep.equal(expected);
  });

  it("should sort by string as well", function (): void {
    // arrange
    const input = [{ level: "b" }, { level: "C" }, { level: "a" }];
    const expected = [{ level: "C" }, { level: "a" }, { level: "b" }];

    // act
    const result = sort(input, i => i.level);

    // assert
    expect(result).to.be.deep.equal(expected);
  });
});
