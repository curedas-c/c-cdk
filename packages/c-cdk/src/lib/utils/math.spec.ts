import { randomInteger } from './math';

describe('randomInteger', () => {
  it('should return a value between range', () => {
    const result = randomInteger(10, 45);
    expect(result).toBeGreaterThanOrEqual(10);
    expect(result).toBeLessThanOrEqual(45);
  });

  it('should return the greatest value when range is invalid', () => {
    const result = randomInteger(48.3, 23.5);
    expect(result).toEqual(Math.floor(48.3));
  });
});
