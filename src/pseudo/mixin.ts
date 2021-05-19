import { css } from '../css';
import { pseudoSelectors } from './selectors';

export type PseudoProps = Partial<Record<keyof typeof pseudoSelectors, any>>;

/**
 * Mixin that resolves to a CSS object containing all pseudo selector styles.
 *
 * Usage: `styled('div')(pseudoMixin)`
 */
export const pseudoMixin = (props: any) => {
  const pseudoKeys = Object.keys(pseudoSelectors);

  const result: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (pseudoKeys.includes(key)) {
      result[key] = props[key];
    }
  });

  return css(result)(props);
};
