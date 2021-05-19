import { isFunction, isObject } from '../utils';
import { pseudoSelectors } from './selectors';

/**
 * Remaps known pseudo prop keys to their CSS selectors.
 */
export function remapPseudoProps(props: any) {
  const result: any = {};

  Object.keys(props).forEach(prop => {
    const name =
      prop in pseudoSelectors
        ? pseudoSelectors[prop as keyof typeof pseudoSelectors]
        : prop;
    const value = props[prop];

    if (isObject(value) && !isFunction(value)) {
      result[name] = remapPseudoProps(value);
    } else {
      result[name] = value;
    }
  });

  return result;
}
