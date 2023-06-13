import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  ThemeValue,
  TLengthStyledSystem,
} from '../types';

export interface BorderProps<ThemeType extends Theme = RequiredTheme> {
  border?: ResponsiveValue<Property.Border<TLengthStyledSystem>, ThemeType>;
  borderWidth?: ResponsiveValue<
    ThemeValue<'borderWidths', ThemeType>,
    ThemeType
  >;
  borderStyle?: ResponsiveValue<Property.BorderStyle, ThemeType>;
  borderColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;

  borderRadius?: ResponsiveValue<ThemeValue<'radii', ThemeType>, ThemeType>;
  borderTopLeftRadius?: ResponsiveValue<
    ThemeValue<'radii', ThemeType>,
    ThemeType
  >;
  borderTopRightRadius?: ResponsiveValue<
    ThemeValue<'radii', ThemeType>,
    ThemeType
  >;
  borderBottomLeftRadius?: ResponsiveValue<
    ThemeValue<'radii', ThemeType>,
    ThemeType
  >;
  borderBottomRightRadius?: ResponsiveValue<
    ThemeValue<'radii', ThemeType>,
    ThemeType
  >;

  borderTop?: ResponsiveValue<
    Property.BorderTop<TLengthStyledSystem>,
    ThemeType
  >;
  borderTopWidth?: ResponsiveValue<
    ThemeValue<'borderWidths', ThemeType>,
    ThemeType
  >;
  borderTopStyle?: ResponsiveValue<Property.BorderTopStyle, ThemeType>;
  borderTopColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;

  borderRight?: ResponsiveValue<
    Property.BorderRight<TLengthStyledSystem>,
    ThemeType
  >;
  borderRightWidth?: ResponsiveValue<
    ThemeValue<'borderWidths', ThemeType>,
    ThemeType
  >;
  borderRightStyle?: ResponsiveValue<Property.BorderRightStyle, ThemeType>;
  borderRightColor?: ResponsiveValue<
    ThemeValue<'colors', ThemeType>,
    ThemeType
  >;

  borderBottom?: ResponsiveValue<
    Property.BorderBottom<TLengthStyledSystem>,
    ThemeType
  >;
  borderBottomWidth?: ResponsiveValue<
    ThemeValue<'borderWidths', ThemeType>,
    ThemeType
  >;
  borderBottomStyle?: ResponsiveValue<Property.BorderBottomStyle, ThemeType>;
  borderBottomColor?: ResponsiveValue<
    ThemeValue<'colors', ThemeType>,
    ThemeType
  >;

  borderLeft?: ResponsiveValue<
    Property.BorderLeft<TLengthStyledSystem>,
    ThemeType
  >;
  borderLeftWidth?: ResponsiveValue<
    ThemeValue<'borderWidths', ThemeType>,
    ThemeType
  >;
  borderLeftStyle?: ResponsiveValue<Property.BorderLeftStyle, ThemeType>;
  borderLeftColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;

  borderX?: ResponsiveValue<Property.Border<TLengthStyledSystem>, ThemeType>;
  borderY?: ResponsiveValue<Property.Border<TLengthStyledSystem>, ThemeType>;
}

const config: SystemConfig<string> = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
  },
};

export const border = system(config);
