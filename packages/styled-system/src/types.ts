import { Property, StandardProperties, SvgProperties, Pseudos } from 'csstype';

import { ObjectOrArray } from './core';

export type Scale = ObjectOrArray<string | number>;

export type TLengthStyledSystem = string | 0 | number;

export interface Theme<TLength = TLengthStyledSystem> {
  breakpoints?: ObjectOrArray<number | string | symbol>;
  mediaQueries?: { [size: string]: string };
  space?: ObjectOrArray<Property.Margin<number | string>>;
  fontSizes?: ObjectOrArray<Property.FontSize<number>>;
  colors?: ObjectOrArray<Property.Color>;
  fonts?: ObjectOrArray<Property.FontFamily>;
  fontWeights?: ObjectOrArray<Property.FontWeight>;
  lineHeights?: ObjectOrArray<Property.LineHeight<TLength>>;
  letterSpacings?: ObjectOrArray<Property.LetterSpacing<TLength>>;
  sizes?: ObjectOrArray<Property.Height<TLength> | Property.Width<TLength>>;
  borders?: ObjectOrArray<Property.Border<TLength>>;
  borderStyles?: ObjectOrArray<Property.Border<TLength>>;
  borderWidths?: ObjectOrArray<Property.BorderWidth<TLength>>;
  radii?: ObjectOrArray<Property.BorderRadius<TLength>>;
  shadows?: ObjectOrArray<Property.BoxShadow>;
  zIndices?: ObjectOrArray<Property.ZIndex>;
  variants?: Record<
    string,
    | Record<string, string | Record<string, string>>
    | ((
        theme: Omit<Theme, 'variants'>
      ) => Record<string, string | Record<string, string>>)
  >;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | Array<T | null>
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type ThemeValue<K extends keyof ThemeType, ThemeType> =
  | Array<keyof ThemeType[K]>
  | {
      [k: string]: keyof ThemeType[K];
    }
  | keyof ThemeType[K]
  | number
  | string;

interface CSSProperties
  extends StandardProperties<number | string>,
    SvgProperties<number | string> {}

type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K];
};

type CSSPseudosForCSSObject = { [K in Pseudos]?: CSSObject };

type CSSInterpolation = undefined | number | string | CSSObject;

interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation;
}

/**
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 */
export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudosForCSSObject,
    CSSOthersObjectForCSSObject {}
