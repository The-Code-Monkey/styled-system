import { variant, TextVariants, defaultStyles } from '../';
import { system, compose } from '../../core';
import { color } from '../../parsers/color';

const fontSize = system({ fontSize: true });

describe('variant', () => {
  it('returns style objects from theme', () => {
    const buttons = variant({ key: 'buttons' });
    const a = buttons({
      theme: {
        variants: {
          buttons: {
            primary: {
              padding: '32px',
              _hover: {
                bg: 'red',
              },
            },
          },
        },
      },
      variant: 'primary',
    });
    expect(a).toEqual({
      padding: '32px',
      '&:hover, &[data-hover]': {
        backgroundColor: 'red',
        color: '#000',
      },
    });
  });

  it('variant prop can be customized', () => {
    const buttons = variant({ key: 'buttons', prop: 'type' });
    const a = buttons({
      theme: {
        variants: {
          buttons: {
            primary: {
              padding: '32px',
              backgroundColor: 'tomato',
            },
          },
        },
      },
      type: 'primary',
    });
    expect(a).toEqual({
      padding: '32px',
      backgroundColor: 'tomato',
    });
  });

  it('variant can be composed', () => {
    const system = compose(variant({ key: 'typography' }), fontSize, color);
    const result = system({
      theme: {
        variants: {
          typography: {
            primary: {
              fontSize: '32px',
              color: '#fff',
            },
          },
        },
      },
      variant: 'primary',
    });
    expect(result).toEqual({
      fontSize: '32px',
      color: '#fff',
    });
  });

  it('textStyle prop returns theme.textStyles object', () => {
    const a = TextVariants({
      theme: {
        variants: {
          text: {
            heading: {
              fontWeight: 'bold',
              lineHeight: 1.25,
            },
          },
        },
      },
      variant: 'heading',
    });
    expect(a).toEqual({
      fontWeight: 'bold',
      lineHeight: 1.25,
    });
  });

  describe('component variant', () => {
    it('returns a variant and contrastTransform works', () => {
      const comp = variant({});
      const primary = comp({
        variant: 'primary',
        theme: {
          variants: {
            primary: {
              bg: '#fff',
            },
            secondary: {
              bg: '#000',
            },
          },
        },
      });
      const secondary = comp({
        variant: 'secondary',
        theme: {
          variants: {
            primary: {
              bg: '#fff',
            },
            secondary: {
              bg: '#000',
            },
          },
        },
      });
      expect(primary).toEqual({
        color: '#000',
        backgroundColor: '#fff',
      });
      expect(secondary).toEqual({
        color: '#FFF',
        backgroundColor: '#000',
      });
    });

    it('returns theme-aware styles', () => {
      const comp = variant({});
      const style = comp({
        variant: 'primary',
        theme: {
          colors: {
            primary: '#07c',
          },
          variants: {
            primary: {
              p: 3,
              fontSize: 1,
              color: 'white',
              bgColor: 'primary',
            },
          },
        },
      });
      expect(style).toEqual({
        padding: 16,
        fontSize: 14,
        color: 'white',
        backgroundColor: '#07c',
      });
    });

    it('can use a custom prop name', () => {
      const comp = variant({
        prop: 'size',
      });
      const style = comp({
        size: 'big',
        theme: {
          variants: {
            big: {
              fontSize: 32,
              fontWeight: 900,
              lineHeight: 1.25,
            },
          },
        },
      });
      expect(style).toEqual({
        fontSize: 32,
        fontWeight: 900,
        lineHeight: 1.25,
      });
    });

    it('does not throw when no variants are found', () => {
      const comp = variant({});
      let style;
      expect(() => {
        style = comp({
          variant: 'beep',
          theme: {
            variants: {
              beep: {},
            },
          },
        });
      }).not.toThrow();
      expect(style).toEqual({});
    });

    it('returns empty object when no prop is provided', () => {
      const comp = variant({
        variants: {
          beep: {},
        },
      });
      const style = comp({});
      expect(style).toEqual({});
    });

    it('can be composed with other style props', () => {
      const parser = compose(variant({}), color, fontSize);
      const a = parser({
        theme: {
          variants: {
            tomato: {
              color: 'tomato',
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
        },
        variant: 'tomato',
      });
      const b = parser({
        theme: {
          variants: {
            tomato: {
              color: 'tomato',
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
        },
        variant: 'tomato',
        color: 'blue',
        fontSize: 32,
      });
      expect(a).toEqual({
        color: 'tomato',
        fontSize: 20,
        fontWeight: 'bold',
      });
      expect(b).toEqual({
        color: 'blue',
        fontSize: 32,
        fontWeight: 'bold',
      });
    });
  });

  it('should return defaultStyles', () => {
    const styles = defaultStyles({
      theme: {
        defaultStyles: {
          table: {
            _hover: {
              bg: 'red',
            },
          },
        },
      },
      defaultStyles: 'table',
    });

    expect(styles).toEqual({
      '&:hover, &[data-hover]': {
        backgroundColor: 'red',
        color: '#000',
      },
    });
  });
});
