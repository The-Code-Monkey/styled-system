import { get, merge, sort } from '../util';

describe('util', () => {
  describe('get', () => {
    it('should return a deeply nested value', () => {
      const a = get(
        {
          colors: {
            blue: ['#0cf', '#0be', '#09d', '#07c'],
          },
        },
        'colors.blue.3'
      );
      expect(a).toBe('#07c');
    });

    it('should return a deeply nested named value', () => {
      const a = get(
        {
          colors: {
            blue: { 100: '#0cf', 200: '#0be', 300: '#09d', 400: '#07c' },
          },
        },
        'colors.blue.400'
      );
      expect(a).toBe('#07c');
    });

    it('should support fallback values', () => {
      const a = get({}, 'hi', 'nope');
      expect(a).toBe('nope');
    });

    it('should handle number values', () => {
      const a = get([1, 2, 3], 0);
      expect(a).toBe(1);
    });

    it('should handle undefined values', () => {
      const a = get({}, (undefined as unknown) as string);
      expect(a).toBe(undefined);
    });

    it('should handle null values', () => {
      const a = get({}, (null as unknown) as string);
      expect(a).toBe(undefined);
    });

    it('should return 0 index items', () => {
      const a = get(['a', 'b', 'c'], 0);
      expect(a).toBe('a');
    });
  });

  describe('merge', () => {
    it('should deeply merge', () => {
      const result = merge(
        {
          hello: 'hi',
          media: {
            howdy: 'ho',
          },
        },
        {
          beep: 'boop',
          media: {
            bleep: 'bloop',
          },
        }
      );

      expect(result).toEqual({
        hello: 'hi',
        beep: 'boop',
        media: {
          howdy: 'ho',
          bleep: 'bloop',
        },
      });
    });
  });

  describe('sort', () => {
    it('should sort', () => {
      const result = sort({
        '@media screen and (min-width: 5em)': {},
        '@media screen and (min-width: 3em)': {},
        '@media screen and (min-width: 4em)': {},
        '@media screen and (min-width: 10em)': {},
        '@media screen and (min-width: -12em)': {},
      });

      expect(result).toEqual({
        '@media screen and (min-width: -12em)': {},
        '@media screen and (min-width: 3em)': {},
        '@media screen and (min-width: 4em)': {},
        '@media screen and (min-width: 5em)': {},
        '@media screen and (min-width: 10em)': {},
      });
    });
  });
});
