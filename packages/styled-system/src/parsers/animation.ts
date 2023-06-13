import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';

export interface AnimationProps<ThemeType extends Theme = RequiredTheme> {
  animation?: ResponsiveValue<
    Property.Animation<TLengthStyledSystem>,
    ThemeType
  >;
  animationName?: ResponsiveValue<Property.AnimationName, ThemeType>;
  animationDuration?: ResponsiveValue<
    Property.AnimationDuration<TLengthStyledSystem>,
    ThemeType
  >;
  animationTimingFunction?: ResponsiveValue<
    Property.AnimationTimingFunction,
    ThemeType
  >;
  animationDelay?: ResponsiveValue<
    Property.AnimationDelay<TLengthStyledSystem>,
    ThemeType
  >;
  animationIterationCount?: ResponsiveValue<
    Property.AnimationIterationCount,
    ThemeType
  >;
  animationDirection?: ResponsiveValue<
    Property.AnimationDuration<TLengthStyledSystem>,
    ThemeType
  >;
  animationFillMode?: ResponsiveValue<Property.AnimationFillMode, ThemeType>;
  animationPlayState?: ResponsiveValue<Property.AnimationPlayState, ThemeType>;
}

const config: SystemConfig<string> = {
  animation: {
    property: 'animation',
    scale: 'animation.animation',
  },
  animationName: {
    property: 'animationName',
    scale: 'animation.name',
  },
  animationDuration: {
    property: 'animationDuration',
    scale: 'animation.duration',
  },
  animationTimingFunction: {
    property: 'animationTimingFunction',
    scale: 'animation.timingFn',
  },
  animationDelay: {
    property: 'animationDelay',
    scale: 'animation.delay',
  },
  animationIterationCount: {
    property: 'animationIterationCount',
  },
  animationDirection: {
    property: 'animationDirection',
  },
  animationFillMode: {
    property: 'animationFillMode',
  },
  animationPlayState: {
    property: 'animationPlayState',
  },
};

export const animation = system(config);
