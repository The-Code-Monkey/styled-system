import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import { contrastTransform } from '../functions';
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types';

export interface ColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  backgroundColor?: ResponsiveValue<TVal, ThemeType>;
  bg?: ResponsiveValue<TVal, ThemeType>;
  bgColor?: ResponsiveValue<TVal, ThemeType>;
  color?: ResponsiveValue<TVal, ThemeType>;
  opacity?: ResponsiveValue<Property.Opacity, ThemeType>;
}

const config: SystemConfig<string> = {
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
  bg: {
    properties: ['color', 'backgroundColor'],
    scale: 'colors',
    transform: contrastTransform,
  },
};

config.bgColor = config.backgroundColor;

export const color = system(config);
