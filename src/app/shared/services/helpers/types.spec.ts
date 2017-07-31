import { type } from './type';

describe('HELPER - Type', () => {
  const typeName = '[TEST] My super Type';

  it('should accept unique type', () => {
    expect(() => type(typeName)).not.toThrow();
    expect(() => type(typeName)).toBeTruthy();

    const types = [ '[TEST] type 1', '[TEST] type 2', '[TEST] type 3'];
    types.forEach(currentType => {
      expect(() => type(currentType)).not.toThrow();
      expect(() => type(currentType)).toBeTruthy();
    });
  });

  it('should not accept duplicated type', () => {
    expect(() => type(typeName)).toThrowError(`Action type "${typeName}" is not unique`);
    expect(() => type(typeName)).toThrow();
  });
});
