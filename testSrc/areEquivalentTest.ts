import { expect } from "chai";
import { areEquivalent } from "../src";

describe("areEquivalent", function (): void {
  it("should return true for equal arrays", function (): void {
    // arrange
    const input = [1, 2, 3];
    const input2 = [1, 2, 3];

    // act
    const result = areEquivalent(input, input2);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return true for arrays with equal items and different order", function (): void {
    // arrange
    const input = [{ item: "1" }, { item: "2" }];
    const input2 = [{ item: "2" }, { item: "1" }];

    // act
    const result = areEquivalent(input, input2, item => item.item);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return false for different length", function (): void {
    // arrange
    const input = [1, 2, 3];
    const input2 = [1, 2];

    // act
    const result = areEquivalent(input, input2);

    // assert
    expect(result).to.be.equal(false);
  });

  it("should return false for different content", function (): void {
    // arrange
    const input = [1, 2, 3];
    const input2 = [1, 3, 3];

    // act
    const result = areEquivalent(input, input2);

    // assert
    expect(result).to.be.equal(false);
  });

});
