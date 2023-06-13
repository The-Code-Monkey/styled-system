import { system } from '..';
import { contrastTransform } from '../../functions';

describe('system', () => {
  it('should return a parser', () => {
    const parser = system({
      color: true,
      backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
      },
      mx: {
        scale: 'space',
        properties: ['marginLeft', 'marginRight'],
      },
    });

    expect(typeof parser).toBe('function');
  });

  it('should return styles', () => {
    const parser = system({
      color: true,
      backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
      },
      mx: {
        scale: 'space',
        properties: ['marginLeft', 'marginRight'],
      },
    });

    const styles = parser({
      theme: {
        space: [0, 4, 8, 16, 32],
        colors: {
          primary: 'rebeccapurple',
        },
      },
      color: 'tomato',
      backgroundColor: 'primary',
      mx: [2, 3, 4],
    });

    expect(styles).toEqual({
      color: 'tomato',
      backgroundColor: 'rebeccapurple',
      marginLeft: 8,
      marginRight: 8,
      '@media screen and (min-width: 40em)': {
        marginLeft: 16,
        marginRight: 16,
      },
      '@media screen and (min-width: 52em)': {
        marginLeft: 32,
        marginRight: 32,
      },
    });
  });

  it('should merge multiple responsive styles', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      margin: [0, 4, 8],
      padding: [16, 32, 64],
      width: ['100%', '50%'],
    });

    expect(styles).toEqual({
      margin: 0,
      padding: 16,
      width: '100%',
      '@media screen and (min-width: 40em)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
        padding: 64,
      },
    });
  });

  it('should merge multiple responsive styles as objects', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      margin: { _: 0, 0: 4, 1: 8 },
      padding: { _: 16, 0: 32, 1: 64 },
      width: { _: '100%', 0: '50%' },
    });

    expect(styles).toEqual({
      margin: 0,
      padding: 16,
      width: '100%',
      '@media screen and (min-width: 40em)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
        padding: 64,
      },
    });
  });

  it('should resolve values from the theme', () => {
    const parser = system({
      mx: {
        properties: ['marginLeft', 'marginRight'],
        scale: 'space',
      },
      color: {
        property: 'color',
        scale: 'colors',
      },
    });

    const styles = parser({
      theme: {
        colors: {
          primary: 'tomato',
        },
        space: [0, 6, 12, 24, 48, 96],
      },
      mx: [0, 1, 2, 3],
      color: ['primary', 'black'],
    });

    expect(styles).toEqual({
      color: 'tomato',
      marginLeft: 0,
      marginRight: 0,
      '@media screen and (min-width: 40em)': {
        color: 'black',
        marginLeft: 6,
        marginRight: 6,
      },
      '@media screen and (min-width: 52em)': {
        marginLeft: 12,
        marginRight: 12,
      },
      '@media screen and (min-width: 64em)': {
        marginLeft: 24,
        marginRight: 24,
      },
    });
  });

  it('should gets 0 index values from a theme', () => {
    const parser = system({
      width: {
        property: 'width',
        scale: 'sizes',
      },
    });

    const style = parser({
      theme: {
        sizes: [24, 48],
      },
      width: 0,
    });

    expect(style).toEqual({ width: 24 });
  });

  it('should ignore null values', () => {
    const parser = system({
      color: true,
    });

    const style = parser({ color: null });

    expect(style).toEqual({});
  });

  it('should return a noop function with no arguments', () => {
    const parser = system();

    expect(typeof parser).toBe('function');
  });

  it('should skip null values in arrays', () => {
    const parser = system({
      fontSize: true,
    });

    const style = parser({
      fontSize: [16, null, null, 18],
    });

    expect(style).toEqual({
      fontSize: 16,
      // omitting these keys cause issues when using multiple responsive props together
      '@media screen and (min-width: 40em)': {},
      '@media screen and (min-width: 52em)': {},
      '@media screen and (min-width: 64em)': {
        fontSize: 18,
      },
    });
  });

  it('should include single property functions', () => {
    const parser = system({
      color: true,
      backgroundColor: true,
      width: true,
    });

    const a = parser.color({ color: 'tomato', backgroundColor: 'nope' });
    const b = parser.width({
      width: '100%',
      color: 'tomato',
      backgroundColor: 'nope',
    });

    expect(a).toEqual({ color: 'tomato' });
    expect(b).toEqual({ width: '100%' });
  });

  it('should return parser configs that can be composed manually', () => {
    const color = system({ color: true, backgroundColor: true });

    const layout = system({ width: true, height: true });

    const composed = system({ ...color.config, ...layout.config });

    const style = composed({
      color: 'tomato',
      backgroundColor: 'black',
      width: '100%',
    });

    expect(style).toEqual({
      color: 'tomato',
      backgroundColor: 'black',
      width: '100%',
    });
  });

  it('should support non-array breakpoint objects', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      theme: {
        disableStyledSystemCache: true,
        breakpoints: {
          sm: '32em',
          md: '40em',
          lg: '64em',
        },
      },
      margin: { _: 0, sm: 4, md: 8 },
      padding: { _: 16, lg: 64 },
    });

    expect(styles).toEqual({
      margin: 0,
      padding: 16,
      '@media screen and (min-width: 32em)': {
        margin: 4,
      },
      '@media screen and (min-width: 40em)': {
        margin: 8,
      },
      '@media screen and (min-width: 64em)': {
        padding: 64,
      },
    });
  });

  it('should sort media queries when responsive object values are used', () => {
    const parser = system({
      margin: true,
      padding: true,
      color: true,
    });

    const styles = parser({
      theme: {
        disableStyledSystemCache: true,
        breakpoints: {
          sm: '32em',
          md: '40em',
          lg: '64em',
          xl: '128em',
        },
      },
      padding: { _: 16, lg: 64, xl: 128 },
      margin: { sm: 4, md: 8 },
      color: { lg: 'tomato' },
    });

    expect(Object.keys(styles)).toEqual([
      '@media screen and (min-width: 32em)',
      '@media screen and (min-width: 40em)',
      '@media screen and (min-width: 64em)',
      '@media screen and (min-width: 128em)',
      'padding',
    ]);
  });

  it('should transform values', () => {
    const parser = system({
      margin: {
        property: 'margin',
        transform: (_scale, n, _fallback, props) => {
          const v = typeof n === 'number' ? n : parseInt(n, 10);
          const m = (props.multiply as number) || 1;
          return m * v;
        },
      },
    });

    const a = parser({ margin: 8 });
    const b = parser({ margin: 12, multiply: 2 });

    expect(a).toEqual({ margin: 8 });
    expect(b).toEqual({ margin: 24 });
  });

  it('should transform multiple values', () => {
    const parser = system({
      bg: {
        properties: ['color', 'backgroundColor'],
        scale: 'colors',
        transform: contrastTransform,
      },
    });

    const a = parser({
      theme: {
        colors: {
          text: 'orange',
          modes: {
            light: {
              text: 'black',
            },
            dark: {
              text: 'white',
            },
          },
        },
      },
      bg: '#ff00ff',
    });

    expect(a).toEqual({ color: 'black', backgroundColor: '#ff00ff' });
  });
});
