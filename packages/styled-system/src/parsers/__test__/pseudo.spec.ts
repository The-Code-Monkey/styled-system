import { pseudo } from '../pseudo';

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

describe('pseudo', () => {
  it('should return object with pseudo', () => {
    const style = pseudo({
      theme,
      _hover: {
        bg: 'red',
      },
      _disabled: {
        bg: 'blue',
      },
    });

    expect(style).toEqual({
      '&:hover, &[data-hover]': {
        backgroundColor: 'red',
        color: '#000',
      },
      '&[disabled], &[aria-disabled=true], &[data-disabled]': {
        backgroundColor: 'blue',
        color: '#FFF',
      },
    });
  });
});
