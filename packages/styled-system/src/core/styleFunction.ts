import { Properties, Pseudos } from 'csstype';

import { Scale } from '../types';

import { ObjectOrArray } from './types';
import { get } from './util';

type TransformType = (
  scale: Scale | undefined,
  path: string | number,
  fallback?: string | number | ObjectOrArray<string | number> | null,
  props?: Record<string, string | number | boolean>
) => ObjectOrArray<string | number> | string | number;

export interface StyleFn {
  property?: keyof Properties | `&${Pseudos}`;
  properties?: Array<keyof Properties> | Array<string>;
  scale?: string;
  transform?: TransformType;
  defaults?: Scale;
}

export interface CreateStyleFunctionArgs {
  property?: keyof Properties | `&${Pseudos}`;
  properties?: Array<keyof Properties | `&${Pseudos}`>;
  scale?: string;
  transform?: TransformType;
  defaultScale?: Scale;
}

export function createStyleFunction({
  properties,
  property,
  scale,
  transform = get,
  defaultScale,
}: CreateStyleFunctionArgs): StyleFn {
  const p = properties || (property ? [property] : []);

  const styleFn = (_value, _scale, _props) => {
    const result: { [key in keyof Properties]: string } = {};

    const value = transform(_scale, _value, _value, _props);

    if (value === null) {
      return undefined;
    }

    if (Array.isArray(value) && properties.length > 1) {
      p.forEach((prop, index) => {
        result[prop] = value[index];
      });
    } else {
      p.forEach(prop => {
        result[prop] = value;
      });
    }

    return result;
  };

  styleFn.properties = properties;
  styleFn.property = property;
  styleFn.scale = scale;
  styleFn.transform = transform.name !== 'get' ? transform : undefined;
  styleFn.defaults = defaultScale;

  return styleFn;
}
