import { Property } from 'csstype';
import { system, SystemConfig } from '../core';
import { RequiredTheme, ResponsiveValue, Theme } from '../types';

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> {
  boxShadow?: ResponsiveValue<Property.BoxShadow | (number & {}), ThemeType>;
  textShadow?: ResponsiveValue<Property.TextShadow | (number & {}), ThemeType>;
}

const config: SystemConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
};

export const shadow = system(config);
