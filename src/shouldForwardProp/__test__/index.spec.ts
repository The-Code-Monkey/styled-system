import { allProps, shouldForwardProp, sfp } from '..';

describe('shouldForwardProp', () => {
  it('should return true for valid HTML attributes', () => {
    const should = shouldForwardProp('href');
    expect(should).toBe(true);
  });

  it.each(allProps)(
    `it should return false for Styled System '%s' prop`,
    prop => {
      const should = shouldForwardProp(prop);
      expect(should).toBe(false);
    }
  );

  it('should return false for an added prop', () => {
    const should = sfp(['someCustomProp'])('someCustomProp');
    expect(should).toBe(false);
  });
});
