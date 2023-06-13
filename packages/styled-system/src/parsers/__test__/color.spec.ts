import { color } from '../color';

describe('color', () => {
  it('should return colors styles', () => {
    const style = color({
      color: 'gold',
      bgColor: 'tomato',
    });

    expect(style).toEqual({
      color: 'gold',
      backgroundColor: 'tomato',
    });
  });
});
