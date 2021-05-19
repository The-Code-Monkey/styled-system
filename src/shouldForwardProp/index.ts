import isPropValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';

import { compose } from '../core';
import { animation } from '../parsers/animation';
import { background } from '../parsers/background';
import { border } from '../parsers/border';
import { color } from '../parsers/color';
import { extendedFlexbox } from '../parsers/extendedFlexbox';
import { extendedGrid } from '../parsers/extendedGrid';
import { flexbox } from '../parsers/flexbox';
import { grid } from '../parsers/grid';
import { layout } from '../parsers/layout';
import { other } from '../parsers/other';
import { position } from '../parsers/position';
import { shadow } from '../parsers/shadow';
import { space } from '../parsers/space';
import { transition } from '../parsers/transition';
import { typography } from '../parsers/typography';
import { pseudoSelectors } from '../pseudo';

const all = compose(
  animation,
  background,
  border,
  color,
  extendedFlexbox,
  extendedGrid,
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

/**
 * All `@spicy-ui/styled-system` props.
 */
export const allProps: string[] = [
  ...all.propNames,
  ...Object.keys(pseudoSelectors),
];

/**
 * Create a custom `shouldForwardProp` function.
 * Use this when you don't want `@spicy-ui/styled-system` props included.
 */
export function createShouldForwardProp(props: string[]) {
  const regex = new RegExp(`^(${props.join('|')})$`);
  return memoize(prop => isPropValid(prop) && !regex.test(prop));
}

/**
 * `shouldForwardProp` with all `@spicy-ui/styled-system` props.
 */
export const shouldForwardProp = createShouldForwardProp(allProps);

/**
 * Creates a `shouldFowardProp` with all `@spicy-ui/styled-system` props.
 * Also allows you to add additional props to the `sfp` fn.
 */
export function sfp(props: string[]) {
  return createShouldForwardProp([...allProps, ...props]);
}
