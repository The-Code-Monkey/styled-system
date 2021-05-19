import { get } from '../core';
import { pseudoSelectors } from '../pseudo/selectors';
import { CSSObject, Theme } from '../types';
import { defaultBreakpoints, defaultTheme, isFunction } from '../utils';
import { getParserDicts } from './util';

const { aliases, multiples, scales, transforms } = getParserDicts();

function responsive(styles: any = {}) {
  return (theme: any) => {
    const result: any = {};
    const breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    const mediaQueries = [
      null,
      ...breakpoints.map((n: any) => `@media screen and (min-width: ${n})`),
    ];

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

export function css(args?: any) {
  return (props?: Theme | { theme: Theme }): CSSObject => {
    const theme = { ...defaultTheme, ...((props as any)?.theme || props) };

    const result: any = {};

    const obj = typeof args === 'function' ? args(theme) : args;
    const styles = responsive(obj)(theme);

    Object.keys(styles).forEach(key => {
      const x = styles[key];
      const val = isFunction(x) ? x(theme) : x;

      if (val && typeof val === 'object') {
        if (Object.keys(pseudoSelectors).includes(key)) {
          result[pseudoSelectors[key as keyof typeof pseudoSelectors]] = css(
            val
          )(theme);
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
        value = transform(scale, val, val);
      }

      if (multiples[prop as keyof typeof multiples]) {
        const dirs = multiples[prop as keyof typeof multiples];

        for (let i = 0; i < Object.keys(dirs).length; i += 1) {
          result[dirs[i]] = value;
        }

        return;
      }

      result[prop] = value;
    });

    return result;
  };
}
