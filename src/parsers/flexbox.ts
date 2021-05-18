import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from "../types";

export interface FlexboxProps<ThemeType extends Theme = RequiredTheme> {
  alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent, ThemeType>;
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems, ThemeType>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType>;
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap, ThemeType>;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
  flex?: ResponsiveValue<CSS.Property.Flex<TLengthStyledSystem>, ThemeType>;
  flexFlow?: ResponsiveValue<CSS.Property.FlexFlow, ThemeType>;
  flexGrow?: ResponsiveValue<CSS.Property.FlexGrow, ThemeType>;
  flexShrink?: ResponsiveValue<CSS.Property.FlexShrink, ThemeType>;
  flexBasis?: ResponsiveValue<CSS.Property.FlexBasis<TLengthStyledSystem>, ThemeType>;
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf, ThemeType>;
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf, ThemeType>;
  order?: ResponsiveValue<CSS.Property.Order, ThemeType>;
  placeItems?: ResponsiveValue<CSS.Property.PlaceItems, ThemeType>;
  placeContent?: ResponsiveValue<CSS.Property.PlaceContent, ThemeType>;
  placeSelf?: ResponsiveValue<CSS.Property.PlaceSelf, ThemeType>;
}

const config: SystemConfig = {
  alignItems: {
    property: "alignItems",
  },
  alignContent: {
    property: "alignContent",
  },
  justifyItems: {
    property: "justifyItems",
  },
  justifyContent: {
    property: "justifyContent",
  },
  flexWrap: {
    property: "flexWrap",
  },
  flexDirection: {
    property: "flexDirection",
  },
  flex: {
    property: "flex",
  },
  flexFlow: {
    property: "flexFlow",
  },
  flexGrow: {
    property: "flexGrow",
  },
  flexShrink: {
    property: "flexShrink",
  },
  flexBasis: {
    property: "flexBasis",
    scale: "sizes",
  },
  justifySelf: {
    property: "justifySelf",
  },
  alignSelf: {
    property: "alignSelf",
  },
  order: {
    property: "order",
  },
  placeItems: {
    property: "placeItems",
  },
  placeContent: {
    property: "placeContent",
  },
  placeSelf: {
    property: "placeSelf",
  },
};

config.flexDir = config.flexDirection;

export const flexbox = system(config);
