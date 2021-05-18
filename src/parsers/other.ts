import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue, TLengthStyledSystem } from "../types";

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<TLengthStyledSystem>, ThemeType>;
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType>;
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition, ThemeType>;
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  fill?: ResponsiveValue<ThemeValue<"colors", ThemeType>, ThemeType>;
  stroke?: ResponsiveValue<ThemeValue<"colors", ThemeType>, ThemeType>;
  outline?: ResponsiveValue<CSS.Property.Outline, ThemeType>;
  outlineColor?: ResponsiveValue<ThemeValue<"colors", ThemeType>, ThemeType>;
}

const config: SystemConfig = {
  appearance: {
    property: "appearance",
  },
  transform: {
    property: "transform",
  },
  transformOrigin: {
    property: "transformOrigin",
  },
  visibility: {
    property: "visibility",
  },
  userSelect: {
    property: "userSelect",
  },
  pointerEvents: {
    property: "pointerEvents",
  },
  overflowWrap: {
    property: "overflowWrap",
  },
  boxSizing: {
    property: "boxSizing",
  },
  cursor: {
    property: "cursor",
  },
  resize: {
    property: "resize",
  },
  objectFit: {
    property: "objectFit",
  },
  objectPosition: {
    property: "objectPosition",
  },
  float: {
    property: "float",
  },
  fill: {
    property: "fill",
    scale: "colors",
  },
  stroke: {
    property: "stroke",
    scale: "colors",
  },
  outline: {
    property: "outline",
  },
  outlineColor: {
    property: "outlineColor",
    scale: "colors",
  },
};

export const other = system(config);
