import { Property } from 'csstype';
import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  ThemeValue,
  TLengthStyledSystem,
} from '../types';

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  appearance?: ResponsiveValue<Property.Appearance, ThemeType>;
  transform?: ResponsiveValue<Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<
    Property.TransformOrigin<TLengthStyledSystem>,
    ThemeType
  >;
  visibility?: ResponsiveValue<Property.Visibility, ThemeType>;
  userSelect?: ResponsiveValue<Property.UserSelect, ThemeType>;
  pointerEvents?: ResponsiveValue<Property.PointerEvents, ThemeType>;
  overflowWrap?: ResponsiveValue<Property.OverflowWrap, ThemeType>;
  boxSizing?: ResponsiveValue<Property.BoxSizing, ThemeType>;
  cursor?: ResponsiveValue<Property.Cursor, ThemeType>;
  resize?: ResponsiveValue<Property.Resize, ThemeType>;
  objectFit?: ResponsiveValue<Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<Property.ObjectPosition, ThemeType>;
  float?: ResponsiveValue<Property.Float, ThemeType>;
  fill?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  stroke?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  outline?: ResponsiveValue<Property.Outline, ThemeType>;
  outlineColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
}

const config: SystemConfig = {
  appearance: {
    property: 'appearance',
  },
  transform: {
    property: 'transform',
  },
  transformOrigin: {
    property: 'transformOrigin',
  },
  visibility: {
    property: 'visibility',
  },
  userSelect: {
    property: 'userSelect',
  },
  pointerEvents: {
    property: 'pointerEvents',
  },
  overflowWrap: {
    property: 'overflowWrap',
  },
  boxSizing: {
    property: 'boxSizing',
  },
  cursor: {
    property: 'cursor',
  },
  resize: {
    property: 'resize',
  },
  objectFit: {
    property: 'objectFit',
  },
  objectPosition: {
    property: 'objectPosition',
  },
  float: {
    property: 'float',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  outline: {
    property: 'outline',
  },
  outlineColor: {
    property: 'outlineColor',
    scale: 'colors',
  },
};

export const other = system(config);
