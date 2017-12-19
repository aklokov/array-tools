import { expect } from 'chai';
import { max, maxBy, min, minBy } from '../src';

describe('min-max', function (): void {
  it('should return maximum by selector', function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];

    // act
    const result = max(input, i => i.level);

    // assert
    expect(result).to.be.equal(2);
  });

  it('should return item with maximum value', function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];

    // act
    const result = maxBy(input, i => i.level);

    // assert
    expect(result).to.be.equal(input[1]);
  });

  it('should return maximum', function (): void {
    // arrange
    const input = [1, 3, 2];

    // act
    const result = max(input);

    // assert
    expect(result).to.be.equal(3);
  });

  it('should return minimum by selector', function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];

    // act
    const result = min(input, i => i.level);

    // assert
    expect(result).to.be.equal(0);
  });

  it('should return item with minimum value', function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];

    // act
    const result = minBy(input, i => i.level);

    // assert
    expect(result).to.be.equal(input[2]);
  });

  it('should return minimum', function (): void {
    // arrange
    const input = [1, 3, 2];

    // act
    const result = min(input);

    // assert
    expect(result).to.be.equal(1);
  });
});
