import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from "../types";
import { defaultTheme } from "../utils";

export interface PositionProps<ThemeType extends Theme = RequiredTheme> {
  position?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  pos?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex | (string & {}), ThemeType>;
  top?: ResponsiveValue<CSS.Property.Top<TLengthStyledSystem>, ThemeType>;
  right?: ResponsiveValue<CSS.Property.Right<TLengthStyledSystem>, ThemeType>;
  bottom?: ResponsiveValue<CSS.Property.Bottom<TLengthStyledSystem>, ThemeType>;
  left?: ResponsiveValue<CSS.Property.Left<TLengthStyledSystem>, ThemeType>;
}

const config: SystemConfig = {
  position: {
    property: "position",
  },
  zIndex: {
    property: "zIndex",
    scale: "zIndices",
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: defaultTheme.space,
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: defaultTheme.space,
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: defaultTheme.space,
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: defaultTheme.space,
  },
};

config.pos = config.position;

export const position = system(config);
