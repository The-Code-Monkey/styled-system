import { css } from '..';
import { Theme } from '../../types';

describe('css', () => {
  const theme = {
    colors: {
      primary: 'tomato',
      secondary: 'cyan',
    },
    fontSizes: [12, 14, 16, 24, 36],
    fonts: {
      monospace: 'Menlo, monospace',
    },
    lineHeights: {
      body: 1.5,
    },
    fontWeights: {
      bold: 600,
    },
    sizes: {
      small: 4,
      medium: 8,
      large: 16,
      sidebar: 320,
    },
    borderWidths: {
      thin: 1,
    },
    borderStyles: {
      thick: 'solid',
    },
    radii: {
      small: 5,
    },
  };
  it('should return a function', () => {
    const result = css();

    expect(typeof result).toBe('function');
  });

  it('should return an object', () => {
    const result = css()();

    expect(typeof result).toBe('object');
  });

  it('should return styles', () => {
    const result = css({
      fontSize: 32,
      color: 'blue',
      borderRadius: 4,
    })();

    expect(result).toEqual({
      fontSize: 32,
      color: 'blue',
      borderRadius: 4,
    });
  });

  it('should return system props styles', () => {
    const result = css({
      color: 'primary',
      fontSize: [2, 3, 4],
    })({ theme });

    expect(result).toEqual({
      fontSize: 16,
      '@media screen and (min-width: 40em)': {
        fontSize: 24,
      },
      '@media screen and (min-width: 52em)': {
        fontSize: 36,
      },
      color: 'tomato',
    });
  });

  it('should return nested system props styles', () => {
    const result = css({
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    })({ theme });

    expect(result).toEqual({
      color: 'tomato',
      '&:hover': {
        color: 'cyan',
      },
    });
  });

  it('should support pseudo selectors', () => {
    const result = css({
      color: 'black',
      _hover: {
        color: 'secondary',
      },
      _active: {
        bgColor: 'primary',
      },
    })({ theme });

    expect(result).toEqual({
      color: 'black',
      '&:hover, &[data-hover]': {
        color: 'cyan',
      },
      '&:active, &[data-active]': {
        backgroundColor: 'tomato',
      },
    });
  });

  it('should return nested responsive styles', () => {
    const result = css({
      color: 'primary',
      h1: {
        py: [3, 4],
      },
    })({ theme });
    expect(result).toEqual({
      color: 'tomato',
      h1: {
        paddingTop: 16,
        paddingBottom: 16,
        '@media screen and (min-width: 40em)': {
          paddingTop: 32,
          paddingBottom: 32,
        },
      },
    });
  });

  it('handles all core styled system props', () => {
    const result = css({
      m: 0,
      mb: 2,
      mx: 'auto',
      p: 3,
      py: 4,
      fontSize: 3,
      fontWeight: 'bold',
      color: 'primary',
      background: 'secondary',
      bgColor: 'primary',
      fontFamily: 'monospace',
      lineHeight: 'body',
    })({ theme });

    expect(result).toEqual({
      margin: 0,
      marginBottom: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 16,
      paddingTop: 32,
      paddingBottom: 32,
      color: 'tomato',
      background: 'cyan',
      backgroundColor: 'tomato',
      fontFamily: 'Menlo, monospace',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    });
  });

  test('works with the css prop', () => {
    const result = css({
      color: 'primary',
      m: 0,
      fontSize: 2,
    })(theme);
    expect(result).toEqual({
      color: 'tomato',
      margin: 0,
      fontSize: 16,
    });
  });

  test('works with functional arguments', () => {
    const result = css((t: Theme & { colors: { primary: 'tomato' } }) => ({
      color: t.colors.primary,
    }))(theme);
    expect(result).toEqual({
      color: 'tomato',
    });
  });

  test('supports functional values', () => {
    const result = css({
      color: (t: Theme & { colors: { primary: 'tomato' } }) => t.colors.primary,
    })(theme);
    expect(result).toEqual({
      color: 'tomato',
    });
  });

  test('handles negative margins from scale', () => {
    const result = css({
      mt: -3,
      mx: -4,
    })(theme);
    expect(result).toEqual({
      marginTop: -16,
      marginLeft: -32,
      marginRight: -32,
    });
  });

  it('handles negative top, left, bottom, and right from scale', () => {
    const result = css({
      top: -1,
      right: -4,
      bottom: -3,
      left: -2,
    })(theme);

    expect(result).toEqual({
      top: -4,
      right: -32,
      bottom: -16,
      left: -8,
    });
  });

  test('skip breakpoints', () => {
    const result = css({
      width: ['100%', null, '50%'],
    })(theme);
    expect(result).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {},
      '@media screen and (min-width: 52em)': {
        width: '50%',
      },
    });
  });

  test('padding shorthand does not collide with nested p selector', () => {
    const result = css({
      p: {
        fontSize: 32,
        color: 'tomato',
        p: 2,
      },
      padding: 32,
    })(theme);
    expect(result).toEqual({
      p: {
        fontSize: 32,
        color: 'tomato',
        padding: 8,
      },
      padding: 32,
    });
  });

  test('ignores array values longer than breakpoints', () => {
    const result = css({
      width: [32, 64, 128, 256, 512],
    })({
      breakpoints: ['32em', '40em'],
    });
    expect(result).toEqual({
      width: 32,
      '@media screen and (min-width: 32em)': {
        width: 64,
      },
      '@media screen and (min-width: 40em)': {
        width: 128,
      },
    });
  });

  test('functional values can return responsive arrays', () => {
    const result = css({
      color: (
        t: Theme & { colors: { primary: 'tomato'; secondary: 'cyan' } }
      ) => [t.colors.primary, t.colors.secondary],
    })(theme);
    expect(result).toEqual({
      '@media screen and (min-width: 40em)': {
        color: 'cyan',
      },
      color: 'tomato',
    });
  });

  it('should return individual border styles', () => {
    const result = css({
      borderTopWidth: 'thin',
      borderTopColor: 'primary',
      borderTopStyle: 'thick',
      borderTopLeftRadius: 'small',
      borderTopRightRadius: 'small',
      borderBottomWidth: 'thin',
      borderBottomColor: 'primary',
      borderBottomStyle: 'thick',
      borderBottomLeftRadius: 'small',
      borderBottomRightRadius: 'small',
      borderRightWidth: 'thin',
      borderRightColor: 'primary',
      borderRightStyle: 'thick',
      borderLeftWidth: 'thin',
      borderLeftColor: 'primary',
      borderLeftStyle: 'thick',
    })(theme);
    expect(result).toEqual({
      borderTopColor: 'tomato',
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomColor: 'tomato',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderRightColor: 'tomato',
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      borderLeftColor: 'tomato',
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
    });
  });

  test('flexBasis uses theme.sizes', () => {
    const style = css({
      flexBasis: 'sidebar',
    })(theme);
    expect(style).toEqual({
      flexBasis: 320,
    });
  });

  test('fill and stroke use theme.colors', () => {
    const style = css({
      fill: 'primary',
      stroke: 'secondary',
    })(theme);
    expect(style).toEqual({
      fill: 'tomato',
      stroke: 'cyan',
    });
  });

  test('multiples are transformed', () => {
    const style = css({
      marginX: 2,
      marginY: 2,
      paddingX: 2,
      paddingY: 2,
      size: 'large',
    })(theme);
    expect(style).toEqual({
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8,
      marginBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      paddingBottom: 8,
      width: 16,
      height: 16,
    });
  });

  it('should return outline color from theme', () => {
    const result = css({
      outlineColor: 'primary',
    })(theme);
    expect(result).toEqual({
      outlineColor: 'tomato',
    });
  });

  it('should return correct media query order', () => {
    const result = css({
      width: ['100%', null, '50%'],
      color: ['red', 'green', 'blue'],
    })(theme);
    const keys = Object.keys(result);
    expect(keys).toEqual([
      'width',
      '@media screen and (min-width: 40em)',
      '@media screen and (min-width: 52em)',
      'color',
    ]);
    expect(result).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {
        color: 'green',
      },
      '@media screen and (min-width: 52em)': {
        width: '50%',
        color: 'blue',
      },
      color: 'red',
    });
  });

  it('should return correct media query order 2', () => {
    const result = css({
      flexDirection: 'column',
      justifyContent: [null, 'flex-start', 'flex-end'],
      color: 'background',
      height: '100%',
      px: [2, 3, 4],
      py: 4,
    })(theme);
    const keys = Object.keys(result);
    expect(keys).toEqual([
      'flexDirection',
      'justifyContent',
      '@media screen and (min-width: 40em)',
      '@media screen and (min-width: 52em)',
      'color',
      'height',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'paddingBottom',
    ]);
  });
});
