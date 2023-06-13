import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types';
import { defaultTheme } from '../utils';

export interface TypographyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<Property.FontFamily, ThemeType>;
  fontSize?: ResponsiveValue<ThemeValue<'fontSizes', ThemeType>, ThemeType>;
  fontStyle?: ResponsiveValue<Property.FontStyle, ThemeType>;
  fontWeight?: ResponsiveValue<ThemeValue<'fontWeights', ThemeType>, ThemeType>;
  letterSpacing?: ResponsiveValue<
    ThemeValue<'letterSpacings', ThemeType>,
    ThemeType
  >;
  lineHeight?: ResponsiveValue<ThemeValue<'lineHeights', ThemeType>, ThemeType>;
  textAlign?: ResponsiveValue<Property.TextAlign, ThemeType>;
  textDecoration?: ResponsiveValue<Property.TextDecoration, ThemeType>;
  textOverflow?: ResponsiveValue<Property.TextOverflow, ThemeType>;
  textTransform?: ResponsiveValue<Property.TextTransform, ThemeType>;
  whiteSpace?: ResponsiveValue<Property.WhiteSpace, ThemeType>;
  wordBreak?: ResponsiveValue<Property.WordBreak, ThemeType>;
}

const config: SystemConfig<string> = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaultTheme.fontSizes,
  },
  fontStyle: {
    property: 'fontStyle',
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  textAlign: {
    property: 'textAlign',
  },
  textDecoration: {
    property: 'textDecoration',
  },
  textOverflow: {
    property: 'textOverflow',
  },
  textTransform: {
    property: 'textTransform',
  },
  whiteSpace: {
    property: 'whiteSpace',
  },
  wordBreak: {
    property: 'wordBreak',
  },
};

export const typography = system(config);
