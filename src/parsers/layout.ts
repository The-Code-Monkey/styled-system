import { Property } from 'csstype';
import { get, Scale, system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { isNumber } from '../utils';

function getWidth(scale?: Scale, n?: any) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`);
}

export interface LayoutProps<ThemeType extends Theme = RequiredTheme> {
  width?: ResponsiveValue<Property.Width<TLengthStyledSystem>, ThemeType>;
  w?: ResponsiveValue<Property.Width<TLengthStyledSystem>, ThemeType>;
  height?: ResponsiveValue<Property.Height<TLengthStyledSystem>, ThemeType>;
  h?: ResponsiveValue<Property.Height<TLengthStyledSystem>, ThemeType>;
  minWidth?: ResponsiveValue<Property.MinWidth<TLengthStyledSystem>, ThemeType>;
  minW?: ResponsiveValue<Property.MinWidth<TLengthStyledSystem>, ThemeType>;
  maxWidth?: ResponsiveValue<Property.MaxWidth<TLengthStyledSystem>, ThemeType>;
  maxW?: ResponsiveValue<Property.MaxWidth<TLengthStyledSystem>, ThemeType>;
  minHeight?: ResponsiveValue<
    Property.MinHeight<TLengthStyledSystem>,
    ThemeType
  >;
  minH?: ResponsiveValue<Property.MinHeight<TLengthStyledSystem>, ThemeType>;
  maxHeight?: ResponsiveValue<
    Property.MaxHeight<TLengthStyledSystem>,
    ThemeType
  >;
  maxH?: ResponsiveValue<Property.MaxHeight<TLengthStyledSystem>, ThemeType>;
  display?: ResponsiveValue<Property.Display, ThemeType>;
  d?: ResponsiveValue<Property.Display, ThemeType>;
  size?: ResponsiveValue<Property.Height<TLengthStyledSystem>, ThemeType>;
  verticalAlign?: ResponsiveValue<
    Property.VerticalAlign<TLengthStyledSystem>,
    ThemeType
  >;
  overflow?: ResponsiveValue<Property.Overflow, ThemeType>;
  overflowX?: ResponsiveValue<Property.OverflowX, ThemeType>;
  overflowY?: ResponsiveValue<Property.OverflowY, ThemeType>;
}

const config: SystemConfig = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  display: {
    property: 'display',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  verticalAlign: {
    property: 'verticalAlign',
  },
  overflow: {
    property: 'overflow',
  },
  overflowX: {
    property: 'overflowX',
  },
  overflowY: {
    property: 'overflowY',
  },
};

config.w = config.width;
config.h = config.height;
config.minW = config.minWidth;
config.maxW = config.maxWidth;
config.minH = config.minHeight;
config.maxH = config.maxHeight;
config.d = config.display;

export const layout = system(config);
