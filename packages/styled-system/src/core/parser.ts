import { AllProps } from '../css/util';
import { Scale } from '../types';
import { defaultBreakpoints } from '../utils';

import { get, merge, sort } from './util';

export type SxType = (
  a: string | number | object,
  b: Scale,
  c: unknown
) => object;

function createMediaQuery(n: string) {
  return `@media screen and (min-width: ${n})`;
}

function parseResponsiveStyles(
  mediaQueries: Array<string | null>,
  sx: SxType,
  scale: Scale,
  raw: Array<string | number>,
  props: unknown
): Record<string, string | number> {
  let styles: Record<string, string | number> = {};

  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i];
    const style = sx(value, scale, props);

    if (!media) {
      styles = { ...styles, ...style };
    } else {
      styles = {
        ...styles,
        [media]: { ...(styles as object)[media], ...style },
      };
    }
  });

  return styles;
}

function parseResponsiveObject(
  breakpoints: Array<string>,
  sx: SxType,
  scale: Scale,
  raw: object,
  props: unknown
): Record<string, string | number> {
  let styles: Record<string, string | number> = {};

  Object.keys(raw).forEach(key => {
    const breakpoint = breakpoints[key];
    const value = raw[key];
    const style = sx(value, scale, props);

    if (!breakpoint) {
      styles = { ...styles, ...style };
    } else {
      const media = createMediaQuery(breakpoint);
      styles = {
        ...styles,
        ...{ [media]: { ...(styles as object)[media], ...style } },
      };
    }
  });

  return styles;
}

export interface ParserCache {
  breakpoints?: Array<string>;
  media?: Array<null | string>;
}

type RecordRecord = Record<string, Record<string, unknown>>;

export type Parser = {
  [x in keyof AllProps]: (a: object) => object;
} & {
  cache: ParserCache;
  propNames: string[];
  config: object;
  (
    props: Record<
      string,
      Record<string, unknown> | string | number | Array<string | number>
    >
  ): unknown;
};

export function createParser(config: object) {
  const cache: ParserCache = {};

  const parser = props => {
    let styles = {};
    let shouldSort = false;
    const isCacheDisabled = (props.theme as RecordRecord)
      ?.disableStyledSystemCache;

    Object.keys(props).forEach(key => {
      if (!config[key]) {
        return;
      }

      const sx = config[key];
      const raw = props[key];
      const scale = get(props.theme as RecordRecord, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme as RecordRecord, 'breakpoints', defaultBreakpoints);

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
