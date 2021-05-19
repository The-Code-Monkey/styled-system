import { compose, get, Scale, system, SystemConfig } from '../core';
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types';
import { defaultTheme, isNumber } from '../utils';

export function getMargin(scale?: Scale, n?: any) {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? `-${value}` : value;
  }

  return value * (isNegative ? -1 : 1);
}

export interface MarginProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>
> {
  /** Margin on top, left, bottom and right */
  m?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top, left, bottom and right */
  margin?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top */
  mt?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top */
  marginTop?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on right */
  mr?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on right */
  marginRight?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on bottom */
  mb?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on bottom */
  marginBottom?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left */
  ml?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left */
  marginLeft?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left and right */
  mx?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left and right */
  marginX?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top and bottom */
  my?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top and bottom */
  marginY?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical block start margin of an element. */
  marginBlockStart?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical block end margin of an element. */
  marginBlockEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline start margin of an element. */
  marginInlineStart?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline start margin of an element. */
  marginStart?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline start margin of an element. */
  ms?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline end margin of an element. */
  marginInlineEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline end margin of an element. */
  marginEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on the logical inline end margin of an element. */
  me?: ResponsiveValue<TVal, ThemeType>;
}

const marginConfig: SystemConfig = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space,
  },
};

marginConfig.m = marginConfig.margin;
marginConfig.mt = marginConfig.marginTop;
marginConfig.mr = marginConfig.marginRight;
marginConfig.mb = marginConfig.marginBottom;
marginConfig.ml = marginConfig.marginLeft;
marginConfig.mx = marginConfig.marginX;
marginConfig.my = marginConfig.marginY;
marginConfig.marginStart = marginConfig.marginInlineStart;
marginConfig.ms = marginConfig.marginInlineStart;
marginConfig.marginEnd = marginConfig.marginInlineEnd;
marginConfig.me = marginConfig.marginInlineEnd;

export const margin = system(marginConfig);

export interface PaddingProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>
> {
  /** Padding on top, left, bottom and right */
  p?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top, left, bottom and right */
  padding?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top */
  pt?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top */
  paddingTop?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on right */
  pr?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on right */
  paddingRight?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on bottom */
  pb?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on bottom */
  paddingBottom?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left */
  pl?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left */
  paddingLeft?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left and right */
  px?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left and right */
  paddingX?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top and bottom */
  py?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top and bottom */
  paddingY?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical block start padding of an element. */
  paddingBlockStart?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical block end padding of an element. */
  paddingBlockEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline start padding of an element. */
  paddingInlineStart?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline start padding of an element. */
  paddingStart?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline start padding of an element. */
  ps?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline end padding of an element. */
  paddingInlineEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline end padding of an element. */
  paddingEnd?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on the logical inline end padding of an element. */
  pe?: ResponsiveValue<TVal, ThemeType>;
}

const paddingConfig: SystemConfig = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
};

paddingConfig.p = paddingConfig.padding;
paddingConfig.pt = paddingConfig.paddingTop;
paddingConfig.pr = paddingConfig.paddingRight;
paddingConfig.pb = paddingConfig.paddingBottom;
paddingConfig.pl = paddingConfig.paddingLeft;
paddingConfig.px = paddingConfig.paddingX;
paddingConfig.py = paddingConfig.paddingY;
paddingConfig.paddingStart = paddingConfig.paddingInlineStart;
paddingConfig.ps = paddingConfig.paddingInlineStart;
paddingConfig.paddingEnd = paddingConfig.paddingInlineEnd;
paddingConfig.pe = paddingConfig.paddingInlineEnd;

export const padding = system(paddingConfig);

export interface SpaceProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>
> extends MarginProps<ThemeType, TVal>, PaddingProps<ThemeType, TVal> {}

export const space = compose(margin, padding);
