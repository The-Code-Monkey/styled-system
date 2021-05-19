import { Property } from 'csstype';
import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { defaultTheme } from '../utils';

export interface PositionProps<ThemeType extends Theme = RequiredTheme> {
  position?: ResponsiveValue<Property.Position, ThemeType>;
  pos?: ResponsiveValue<Property.Position, ThemeType>;
  zIndex?: ResponsiveValue<Property.ZIndex | (string & {}), ThemeType>;
  top?: ResponsiveValue<Property.Top<TLengthStyledSystem>, ThemeType>;
  right?: ResponsiveValue<Property.Right<TLengthStyledSystem>, ThemeType>;
  bottom?: ResponsiveValue<Property.Bottom<TLengthStyledSystem>, ThemeType>;
  left?: ResponsiveValue<Property.Left<TLengthStyledSystem>, ThemeType>;
}

const config: SystemConfig = {
  position: {
    property: 'position',
  },
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
};

config.pos = config.position;

export const position = system(config);
