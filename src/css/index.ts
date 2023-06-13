import { get } from '../core';
import { CSSObject, Theme } from '../types';
import {
  defaultBreakpoints,
  defaultTheme,
  isFunction,
  isTheme,
  pseudoSelectors,
} from '../utils';

import { getParserDicts } from './util';

const { aliases, multiples, scales, transforms } = getParserDicts();

function responsive(styles: object = {}) {
  return (theme: Theme) => {
    const result: object = {};
    const breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    const mediaQueries = [
      null,
      ...breakpoints.map(
        (n: string | number) => `@media screen and (min-width: ${n})`
      ),
    ];

    if (!styles) return result;

    Object.keys(styles).forEach(key => {
      const value = isFunction(styles[key]) ? styles[key](theme) : styles[key];

      if (value === null) {
        return;
      }

      if (!Array.isArray(value)) {
        result[key] = value;
        return;
      }

      for (let i = 0; i < value.slice(0, mediaQueries.length).length; i += 1) {
        const media = mediaQueries[i];

        if (!media) {
          result[key] = value[i];
          continue;
        }

        result[media] = result[media] || {};

        if (value[i] == null) {
          continue;
        }

        result[media][key] = value[i];
      }
    });

    return result;
  };
}

export function css(args?: ((a: Theme) => object) | object) {
  return (props?: Theme | { theme: Theme }): CSSObject => {
    // const propsTheme = ((props ?? { theme: props }) as { theme: Theme }).theme;
    let theme: Theme = { ...defaultTheme };

    if (isTheme(props)) {
      theme = { ...theme, ...props.theme };
    } else {
      theme = { ...theme, ...props };
    }

    const result: CSSObject = {};

    const obj = typeof args === 'function' ? args(theme) : args;
    const styles = responsive(obj)(theme);

    Object.keys(styles).forEach(key => {
      const x: string | ((x: Theme) => string) = styles[key];
      const val: string | number | object | unknown = isFunction(x)
        ? x(theme)
        : x;

      if (val && typeof val === 'object') {
        if (Object.keys(pseudoSelectors).includes(key)) {
          result[pseudoSelectors[key].join(', ')] = css(val)(theme);
          return;
        }

        result[key] = css(val)(theme);
        return;
      }

      const prop = get(aliases, key, key);
      const scaleName = get(scales, prop);
      const scale = get(theme, scaleName, get(theme, prop, {}));
      const transform = get(transforms, prop, get);

      let value;

      // when the val is a number and less than 0, resolve it from the theme
      // using its absolute value and then make the result a negative.
      // otherwise, just resolve the value.
      if (typeof val === 'number' && val < 0) {
        const abs = Math.abs(val);
        const n = transform(scale, abs, abs);
        value = typeof n === 'string' ? `-${n}` : n * -1;
      } else {
        value = transform(scale, val as string, val);
      }

      if (multiples[prop as keyof typeof multiples]) {
        const dirs = multiples[prop as keyof typeof multiples];

        for (let i = 0; i < Object.keys(dirs).length; i += 1) {
          if (Array.isArray(value)) {
            result[dirs[i]] = value[i];
          } else {
            result[dirs[i]] = value;
          }
        }

        return;
      } else {
        result[prop] = value;
      }
    });

    return result;
  };
}
