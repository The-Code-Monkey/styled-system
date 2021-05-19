import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types';

export interface ColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  backgroundColor?: ResponsiveValue<TVal, ThemeType>;
  bgColor?: ResponsiveValue<TVal, ThemeType>;
  color?: ResponsiveValue<TVal, ThemeType>;
  opacity?: ResponsiveValue<Property.Opacity, ThemeType>;
}

const config: SystemConfig = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  color: {
    property: 'color',
    scale: 'colors',
  },
  opacity: {
    property: 'opacity',
  },
};

config.bgColor = config.backgroundColor;

export const color = system(config);
