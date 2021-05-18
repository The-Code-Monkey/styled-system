import * as CSS from "csstype";
import { system, SystemConfig } from "../core";
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from "../types";

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> {
  background?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  bg?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  backgroundClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;
  bgClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;
  backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLengthStyledSystem>, ThemeType>;
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLengthStyledSystem>, ThemeType>;
  backgroundPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>;
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>;
  backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  backgroundAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
}

const config: SystemConfig = {
  background: {
    property: "background",
    scale: "colors",
  },
  backgroundImage: {
    property: "backgroundImage",
  },
  backgroundClip: {
    property: "backgroundClip",
  },
  backgroundSize: {
    property: "backgroundSize",
  },
  backgroundPosition: {
    property: "backgroundPosition",
  },
  backgroundRepeat: {
    property: "backgroundRepeat",
  },
  backgroundAttachment: {
    property: "backgroundAttachment",
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
