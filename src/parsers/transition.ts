import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from "../types";

export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
  transition?: ResponsiveValue<CSS.Property.Transition<TLengthStyledSystem>, ThemeType>;
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty, ThemeType>;
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration<TLengthStyledSystem>, ThemeType>;
  transitionTiming?: ResponsiveValue<CSS.Property.TransitionTimingFunction, ThemeType>;
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay<TLengthStyledSystem>, ThemeType>;
}

const config: SystemConfig = {
  transition: {
    property: "transition",
    scale: "transition.transition",
  },
  transitionProperty: {
    property: "transitionProperty",
    scale: "transition.property",
  },
  transitionDuration: {
    property: "transitionDuration",
    scale: "transition.duration",
  },
  transitionTiming: {
    property: "transitionTimingFunction",
    scale: "transition.timingFn",
  },
  transitionDelay: {
    property: "transitionDelay",
    scale: "transition.delay",
  },
};

export const transition = system(config);
