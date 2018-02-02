import { expect } from "chai";
import { except, intersect } from "../src";

describe("except", function (): void {
  it("should return values from first array not present in second array", function (): void {
    // arrange
    const input = [1, 2, 3, 4];
    const input2 = [2, 3, 5];
    const expected = [1, 4];
    // act
    const result = except(input, input2);

    // assert
    expect(result).to.be.deep.equal(expected);
  });
});

describe("intersect", function (): void {
  it("should return values present in both arrays", function (): void {
    // arrange
    const input = [1, 2, 3, 4];
    const input2 = [2, 3, 5];
    const expected = [2, 3];
    // act
    const result = intersect(input, input2);

    // assert
    expect(result).to.be.deep.equal(expected);
  });
});
