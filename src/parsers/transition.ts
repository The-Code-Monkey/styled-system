import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import { ResponsiveValue, TLengthStyledSystem } from '../types';

export interface TransitionProps {
  transition?: ResponsiveValue<Property.Transition<TLengthStyledSystem>>;
  transitionProperty?: ResponsiveValue<Property.TransitionProperty>;
  transitionDuration?: ResponsiveValue<
    Property.TransitionDuration<TLengthStyledSystem>
  >;
  transitionTiming?: ResponsiveValue<Property.TransitionTimingFunction>;
  transitionDelay?: ResponsiveValue<
    Property.TransitionDelay<TLengthStyledSystem>
  >;
}

const config: SystemConfig<string> = {
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
