import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';

export interface FlexboxProps<ThemeType extends Theme = RequiredTheme> {
  alignItems?: ResponsiveValue<Property.AlignItems, ThemeType>;
  alignContent?: ResponsiveValue<Property.AlignContent, ThemeType>;
  justifyItems?: ResponsiveValue<Property.JustifyItems, ThemeType>;
  justifyContent?: ResponsiveValue<Property.JustifyContent, ThemeType>;
  flexWrap?: ResponsiveValue<Property.FlexWrap, ThemeType>;
  flexDirection?: ResponsiveValue<Property.FlexDirection, ThemeType>;
  flexDir?: ResponsiveValue<Property.FlexDirection, ThemeType>;
  flex?: ResponsiveValue<Property.Flex<TLengthStyledSystem>, ThemeType>;
  flexFlow?: ResponsiveValue<Property.FlexFlow, ThemeType>;
  flexGrow?: ResponsiveValue<Property.FlexGrow, ThemeType>;
  flexShrink?: ResponsiveValue<Property.FlexShrink, ThemeType>;
  flexBasis?: ResponsiveValue<
    Property.FlexBasis<TLengthStyledSystem>,
    ThemeType
  >;
  justifySelf?: ResponsiveValue<Property.JustifySelf, ThemeType>;
  alignSelf?: ResponsiveValue<Property.AlignSelf, ThemeType>;
  order?: ResponsiveValue<Property.Order, ThemeType>;
  placeItems?: ResponsiveValue<Property.PlaceItems, ThemeType>;
  placeContent?: ResponsiveValue<Property.PlaceContent, ThemeType>;
  placeSelf?: ResponsiveValue<Property.PlaceSelf, ThemeType>;
}

const config: SystemConfig = {
  alignItems: {
    property: 'alignItems',
  },
  alignContent: {
    property: 'alignContent',
  },
  justifyItems: {
    property: 'justifyItems',
  },
  justifyContent: {
    property: 'justifyContent',
  },
  flexWrap: {
    property: 'flexWrap',
  },
  flexDirection: {
    property: 'flexDirection',
  },
  flex: {
    property: 'flex',
  },
  flexFlow: {
    property: 'flexFlow',
  },
  flexGrow: {
    property: 'flexGrow',
  },
  flexShrink: {
    property: 'flexShrink',
  },
  flexBasis: {
    property: 'flexBasis',
    scale: 'sizes',
  },
  justifySelf: {
    property: 'justifySelf',
  },
  alignSelf: {
    property: 'alignSelf',
  },
  order: {
    property: 'order',
  },
  placeItems: {
    property: 'placeItems',
  },
  placeContent: {
    property: 'placeContent',
  },
  placeSelf: {
    property: 'placeSelf',
  },
};

config.flexDir = config.flexDirection;

export const flexbox = system(config);
