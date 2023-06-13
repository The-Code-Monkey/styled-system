import { compose, StyleFn } from '../core';
import { animation, AnimationProps } from '../parsers/animation';
import { background, BackgroundProps } from '../parsers/background';
import { border, BorderProps } from '../parsers/border';
import { color, ColorProps } from '../parsers/color';
import { flexbox, FlexboxProps } from '../parsers/flexbox';
import { grid, GridProps } from '../parsers/grid';
import { layout, LayoutProps } from '../parsers/layout';
import { other, OtherProps } from '../parsers/other';
import { position, PositionProps } from '../parsers/position';
import { shadow, ShadowProps } from '../parsers/shadow';
import { space, SpaceProps } from '../parsers/space';
import { transition, TransitionProps } from '../parsers/transition';
import { typography, TypographyProps } from '../parsers/typography';
import { Scale } from '../types';

export interface AllProps
  extends AnimationProps,
    BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    OtherProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TransitionProps,
    TypographyProps {}

const all = compose(
  animation,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  other,
  position,
  shadow,
  space,
  transition,
  typography
);

export function getParserDicts() {
  const aliases: Record<string, string> = {};
  const multiples: Record<string, Array<string>> = {};
  const scales: Record<string, string> = {};
  const transforms: Record<
    string,
    (
      scale: Scale,
      path: string | number,
      fallback?: string | number,
      props?: unknown
    ) => unknown
  > = {};

  all.propNames.forEach(propName => {
    const config: StyleFn = all.config[propName];

    if (!config) {
      return;
    }

    if (config.properties) {
      multiples[propName] = [...config.properties];
    }

    if (config.transform && config.transform?.name !== 'getValue') {
      transforms[propName] = config.transform;
    }

    if (config.scale) {
      scales[propName] = config.scale;
    }

    if (config.property && propName !== config.property) {
      aliases[propName] = config.property;
    }
  });

  return { aliases, multiples, scales, transforms };
}
