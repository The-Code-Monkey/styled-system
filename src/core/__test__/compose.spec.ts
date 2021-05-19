import { compose, system, Parser } from '..';

describe('compose', () => {
  const color = system({
    color: true,
    bg: {
      property: 'backgroundColor',
    },
  });

  const fontSize = system({
    fontSize: true,
  });

  it('should combines style parsers', () => {
    const parser = compose(color, fontSize);

    const styles = parser({
      color: 'tomato',
      bg: 'black',
      fontSize: 32,
    });

    expect(typeof parser).toBe('function');
    expect(styles).toEqual({
      fontSize: 32,
      color: 'tomato',
      backgroundColor: 'black',
    });
  });

  it('should handle null parsers', () => {
    const parser = compose(
      (null as unknown) as Parser,
      ({} as unknown) as Parser
    );

    const styles = parser({
      color: 'tomato',
      bg: 'black',
      fontSize: 32,
    });

    expect(typeof parser).toBe('function');
    expect(styles).toEqual({});
  });
});
