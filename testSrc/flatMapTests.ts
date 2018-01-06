import { expect } from "chai";
import { flatMap } from "../src";

describe("flatMap", function (): void {
  it("should return flattened array", function (): void {
    // arrange
    const input = [[1, 2], [2, 3]];

    // act
    const result = flatMap(input);

    // assert
    expect(result).to.be.deep.equal([1, 2, 2, 3]);
  });

  it("should return concatenated arrays", function (): void {
    // arrange
    const input = [{ items: [1, 2] }, { items: [2, 3] }];

    // act
    const result = flatMap(input, i => i.items);

    // assert
    expect(result).to.be.deep.equal([1, 2, 2, 3]);
  });

  it("should not add items that are not array", function (): void {
    // arrange
    const map = new Map<number, number[]>([[1, [2, 3]]]);

    const input = [1, 2];

    // act
    const result = flatMap(input, i => map.get(i));

    // assert
    expect(result).to.be.deep.equal([2, 3]);
  });

});
