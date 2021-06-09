import { variant, TextVariants } from '../';
import { system, compose } from '../../core';

const fontSize = system({ fontSize: true });
const color = system({ color: true });

describe('variant', () => {
  it('returns style objects from theme', () => {
    const buttons = variant({ key: 'buttons' });
    const a = buttons({
      theme: {
        buttons: {
          primary: {
            padding: '32px',
            backgroundColor: 'tomato',
          },
        },
      },
      variant: 'primary',
    });
    expect(a).toEqual({
      padding: '32px',
      backgroundColor: 'tomato',
    });
  });

  it('variant prop can be customized', () => {
    const buttons = variant({ key: 'buttons', prop: 'type' });
    const a = buttons({
      theme: {
        buttons: {
          primary: {
            padding: '32px',
            backgroundColor: 'tomato',
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
        typography: {
          primary: {
            fontSize: '32px',
            color: '#fff',
          },
        },
      },
      variant: 'primary',
      color: '#111',
    });
    expect(result).toEqual({
      fontSize: '32px',
      color: '#111',
    });
  });

  it('textStyle prop returns theme.textStyles object', () => {
    const a = TextVariants({
      theme: {
        text: {
          heading: {
            fontWeight: 'bold',
            lineHeight: 1.25,
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
    it('returns a variant defined inline', () => {
      const comp = variant({
        variants: {
          primary: {
            color: 'black',
            bgColor: 'tomato',
          },
          secondary: {
            color: 'white',
            bgColor: 'purple',
          },
        },
      });
      const primary = comp({ variant: 'primary' });
      const secondary = comp({ variant: 'secondary' });
      expect(primary).toEqual({
        color: 'black',
        backgroundColor: 'tomato',
      });
      expect(secondary).toEqual({
        color: 'white',
        backgroundColor: 'purple',
      });
    });

    it('returns theme-aware styles', () => {
      const comp = variant({
        variants: {
          primary: {
            p: 3,
            fontSize: 1,
            color: 'white',
            bgColor: 'primary',
          },
        },
      });
      const style = comp({
        variant: 'primary',
        theme: {
          colors: {
            primary: '#07c',
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
        variants: {
          big: {
            fontSize: 32,
            fontWeight: 900,
            lineHeight: 1.25,
          },
        },
      });
      const style = comp({ size: 'big' });
      expect(style).toEqual({
        fontSize: 32,
        fontWeight: 900,
        lineHeight: 1.25,
      });
    });

    it('does not throw when no variants are found', () => {
      const comp = variant({
        variants: {
          beep: {},
        },
      });
      let style;
      expect(() => {
        style = comp({ variant: 'beep' });
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
      const parser = compose(
        variant({
          variants: {
            tomato: {
              color: 'tomato',
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
        }),
        color,
        fontSize
      );
      const a = parser({
        variant: 'tomato',
      });
      const b = parser({
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

    it('theme-based variants override local variants', () => {
      const comp = variant({
        variants: {
          primary: {
            color: 'white',
            bg: 'blue',
          },
        },
        scale: 'buttons',
      });
      const style = comp({
        variant: 'primary',
        theme: {
          buttons: {
            primary: {
              color: 'black',
              bgColor: 'cyan',
            },
          },
        },
      });
      expect(style).toEqual({
        color: 'black',
        backgroundColor: 'cyan',
      });
    });
  });
});
