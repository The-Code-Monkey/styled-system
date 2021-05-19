import { Property } from 'csstype';
import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';

export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
  transition?: ResponsiveValue<
    Property.Transition<TLengthStyledSystem>,
    ThemeType
  >;
  transitionProperty?: ResponsiveValue<Property.TransitionProperty, ThemeType>;
  transitionDuration?: ResponsiveValue<
    Property.TransitionDuration<TLengthStyledSystem>,
    ThemeType
  >;
  transitionTiming?: ResponsiveValue<
    Property.TransitionTimingFunction,
    ThemeType
  >;
  transitionDelay?: ResponsiveValue<
    Property.TransitionDelay<TLengthStyledSystem>,
    ThemeType
  >;
}

const config: SystemConfig = {
  transition: {
    property: 'transition',
    scale: 'transition.transition',
  },
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transition.property',
  },
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transition.duration',
  },
  transitionTiming: {
    property: 'transitionTimingFunction',
    scale: 'transition.timingFn',
  },
  transitionDelay: {
    property: 'transitionDelay',
    scale: 'transition.delay',
  },
};

export const transition = system(config);
