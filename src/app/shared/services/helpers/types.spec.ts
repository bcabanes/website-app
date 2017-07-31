import { type } from './type';

describe('HELPER - Type', () => {
  it('should accept unique type', () => {
    const expectedResult = '[TEST] My super Type';
    expect(() => type(expectedResult)).not.toThrowError();
    expect(() => type(expectedResult)).toBeTruthy();

    const types = [ '[TEST] type 1', '[TEST] type 2', '[TEST] type 3'];
    types.forEach(currentType => {
      expect(() => type(currentType)).not.toThrowError();
      expect(() => type(currentType)).toBeTruthy();
    });
  });

  it('should not accept duplicated type', () => {
    const expectedResult = '[TEST] My super Type';
    expect(() => type(expectedResult))
      .toThrow(new Error(`Action type "${expectedResult}" is not unique`));
  });
});
