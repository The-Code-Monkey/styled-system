import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme } from "../types";

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> {
  boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | (number & {}), ThemeType>;
  textShadow?: ResponsiveValue<CSS.Property.TextShadow | (number & {}), ThemeType>;
}

const config: SystemConfig = {
  boxShadow: {
    property: "boxShadow",
    scale: "shadows",
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows",
  },
};

export const shadow = system(config);
