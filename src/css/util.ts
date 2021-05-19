import { compose, StyleFn } from '../core';
import { animation } from '../parsers/animation';
import { background } from '../parsers/background';
import { border } from '../parsers/border';
import { color } from '../parsers/color';
import { flexbox } from '../parsers/flexbox';
import { grid } from '../parsers/grid';
import { layout } from '../parsers/layout';
import { other } from '../parsers/other';
import { position } from '../parsers/position';
import { shadow } from '../parsers/shadow';
import { space } from '../parsers/space';
import { transition } from '../parsers/transition';
import { typography } from '../parsers/typography';

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
  const transforms: Record<string, any> = {};

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
