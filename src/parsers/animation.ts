import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from "../types";

export interface AnimationProps<ThemeType extends Theme = RequiredTheme> {
  animation?: ResponsiveValue<CSS.Property.Animation<TLengthStyledSystem>, ThemeType>;
  animationName?: ResponsiveValue<CSS.Property.AnimationName, ThemeType>;
  animationDuration?: ResponsiveValue<CSS.Property.AnimationDuration<TLengthStyledSystem>, ThemeType>;
  animationTimingFunction?: ResponsiveValue<CSS.Property.AnimationTimingFunction, ThemeType>;
  animationDelay?: ResponsiveValue<CSS.Property.AnimationDelay<TLengthStyledSystem>, ThemeType>;
  animationIterationCount?: ResponsiveValue<CSS.Property.AnimationIterationCount, ThemeType>;
  animationDirection?: ResponsiveValue<CSS.Property.AnimationDuration<TLengthStyledSystem>, ThemeType>;
  animationFillMode?: ResponsiveValue<CSS.Property.AnimationFillMode, ThemeType>;
  animationPlayState?: ResponsiveValue<CSS.Property.AnimationPlayState, ThemeType>;
}

const config: SystemConfig = {
  animation: {
    property: "animation",
    scale: "animation.animation",
  },
  animationName: {
    property: "animationName",
    scale: "animation.name",
  },
  animationDuration: {
    property: "animationDuration",
    scale: "animation.duration",
  },
  animationTimingFunction: {
    property: "animationTimingFunction",
    scale: "animation.timingFn",
  },
  animationDelay: {
    property: "animationDelay",
    scale: "animation.delay",
  },
  animationIterationCount: {
    property: "animationIterationCount",
  },
  animationDirection: {
    property: "animationDirection",
  },
  animationFillMode: {
    property: "animationFillMode",
  },
  animationPlayState: {
    property: "animationPlayState",
  },
};

export const animation = system(config);
