import { Property } from 'csstype';
import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> {
  background?: ResponsiveValue<
    Property.Background<TLengthStyledSystem>,
    ThemeType
  >;
  bg?: ResponsiveValue<Property.Background<TLengthStyledSystem>, ThemeType>;
  backgroundImage?: ResponsiveValue<Property.BackgroundImage, ThemeType>;
  bgImage?: ResponsiveValue<Property.BackgroundImage, ThemeType>;
  backgroundClip?: ResponsiveValue<Property.BackgroundClip, ThemeType>;
  bgClip?: ResponsiveValue<Property.BackgroundClip, ThemeType>;
  backgroundSize?: ResponsiveValue<
    Property.BackgroundSize<TLengthStyledSystem>,
    ThemeType
  >;
  bgSize?: ResponsiveValue<
    Property.BackgroundSize<TLengthStyledSystem>,
    ThemeType
  >;
  backgroundPosition?: ResponsiveValue<
    Property.BackgroundPosition<TLengthStyledSystem>,
    ThemeType
  >;
  bgPosition?: ResponsiveValue<
    Property.BackgroundPosition<TLengthStyledSystem>,
    ThemeType
  >;
  backgroundRepeat?: ResponsiveValue<Property.BackgroundRepeat, ThemeType>;
  bgRepeat?: ResponsiveValue<Property.BackgroundRepeat, ThemeType>;
  backgroundAttachment?: ResponsiveValue<
    Property.BackgroundAttachment,
    ThemeType
  >;
  bgAttachment?: ResponsiveValue<Property.BackgroundAttachment, ThemeType>;
}

const config: SystemConfig = {
  background: {
    property: 'background',
    scale: 'colors',
  },
  backgroundImage: {
    property: 'backgroundImage',
  },
  backgroundClip: {
    property: 'backgroundClip',
  },
  backgroundSize: {
    property: 'backgroundSize',
  },
  backgroundPosition: {
    property: 'backgroundPosition',
  },
  backgroundRepeat: {
    property: 'backgroundRepeat',
  },
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
};

config.bg = config.background;
config.bgImage = config.backgroundImage;
config.bgClip = config.backgroundClip;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
config.bgAttachment = config.backgroundAttachment;

export const background = system(config);
