import { defaultBreakpoints } from '../utils';
import { Scale } from './types';
import { get, merge, sort } from './util';

function createMediaQuery(n: string) {
  return `@media screen and (min-width: ${n})`;
}

function parseResponsiveStyles(
  mediaQueries: Array<string | null>,
  sx: any,
  scale: Scale,
  raw: Array<any>,
  props: any
) {
  let styles: any = {};

  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i];
    const style = sx(value, scale, props);

    if (!media) {
      styles = { ...styles, ...style };
    } else {
      styles = { ...styles, [media]: { ...styles[media], ...style } };
    }
  });

  return styles;
}

function parseResponsiveObject(
  breakpoints: Array<string>,
  sx: any,
  scale: Scale,
  raw: Record<string, unknown>,
  props: any
) {
  let styles: any = {};

  Object.keys(raw).forEach(key => {
    const breakpoint = breakpoints[(key as unknown) as number]; // FIXME?
    const value = raw[key];
    const style = sx(value, scale, props);

    if (!breakpoint) {
      styles = { ...styles, ...style };
    } else {
      const media = createMediaQuery(breakpoint);
      styles = { ...styles, ...{ [media]: { ...styles[media], ...style } } };
    }
  });

  return styles;
}

export interface ParserCache {
  breakpoints?: Array<string>;
  media?: Array<null | string>;
}

export interface Parser {
  (props: any): any;
  config: any;
  propNames: Array<string>;
  cache: ParserCache;
  [key: string]: any;
}

export function createParser(config: any) {
  const cache: ParserCache = {};

  const parser: Parser = (props: any) => {
    let styles = {};
    let shouldSort = false;
    const isCacheDisabled = props.theme?.disableStyledSystemCache;

    Object.keys(props).forEach(key => {
      if (!config[key]) {
        return;
      }

      const sx = config[key];
      const raw = props[key];
      const scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme, 'breakpoints', defaultBreakpoints);

        if (Array.isArray(raw)) {
          cache.media = (!isCacheDisabled && cache.media) || [
            null,
            ...(cache.breakpoints ?? []).map(createMediaQuery),
          ];

          styles = merge(
            styles,
            parseResponsiveStyles(cache.media, sx, scale, raw, props)
          );

          return;
        }

        if (raw !== null) {
          styles = merge(
            styles,
            parseResponsiveObject(
              cache.breakpoints ?? [],
              sx,
              scale,
              raw,
              props
            )
          );

          shouldSort = true;
        }

        return;
      }

      styles = { ...styles, ...sx(raw, scale, props) };
    });

    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parser.config = config;
  parser.propNames = Object.keys(config);
  parser.cache = cache;

  const keys = Object.keys(config).filter(
    k => !['config', 'propNames', 'cache'].includes(k)
  );

  if (keys.length > 1) {
    keys.forEach(key => {
      parser[key] = createParser({ [key]: config[key] });
    });
  }

  return parser;
}
