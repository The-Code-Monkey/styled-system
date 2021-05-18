import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from "../types";
import { defaultTheme } from "../utils";

export interface TypographyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<CSS.Property.FontFamily, ThemeType>;
  fontSize?: ResponsiveValue<ThemeValue<"fontSizes", ThemeType>, ThemeType>;
  fontStyle?: ResponsiveValue<CSS.Property.FontStyle, ThemeType>;
  fontWeight?: ResponsiveValue<ThemeValue<"fontWeights", ThemeType>, ThemeType>;
  letterSpacing?: ResponsiveValue<ThemeValue<"letterSpacings", ThemeType>, ThemeType>;
  lineHeight?: ResponsiveValue<ThemeValue<"lineHeights", ThemeType>, ThemeType>;
  textAlign?: ResponsiveValue<CSS.Property.TextAlign, ThemeType>;
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType>;
}

const config: SystemConfig = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts",
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: defaultTheme.fontSizes,
  },
  fontStyle: {
    property: "fontStyle",
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights",
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings",
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights",
  },
  textAlign: {
    property: "textAlign",
  },
  textDecoration: {
    property: "textDecoration",
  },
  textOverflow: {
    property: "textOverflow",
  },
  textTransform: {
    property: "textTransform",
  },
  whiteSpace: {
    property: "whiteSpace",
  },
  wordBreak: {
    property: "wordBreak",
  },
};

export const typography = system(config);
