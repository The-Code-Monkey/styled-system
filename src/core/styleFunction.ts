import { Properties } from 'csstype';

import { Scale } from './types';
import { get } from './util';

export interface StyleFn {
  (value: any, scale: Scale | undefined, props: any): any;
  properties?: string[];
  property?: string;
  scale?: string;
  transform?: (
    scale: Scale | undefined,
    path: string | number,
    fallback?: any,
    props?: any
  ) => any;
  defaults?: Scale;
}

export interface CreateStyleFunctionArgs {
  property?: keyof Properties;
  properties?: Array<keyof Properties>;
  scale?: string;
  transform?: (
    scale: Scale | undefined,
    path: string | number,
    fallback?: any,
    props?: any
  ) => any;
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

  const styleFn: StyleFn = (_value, _scale, _props) => {
    const result: { [key in keyof Properties]: any } = {};

    const value = transform(_scale, _value, _value, _props);

    if (value === null) {
      return undefined;
    }

    p.forEach(prop => {
      result[prop] = value;
    });

    return result;
  };

  styleFn.properties = properties;
  styleFn.property = property;
  styleFn.scale = scale;
  styleFn.transform = transform.name !== 'get' ? transform : undefined;
  styleFn.defaults = defaultScale;

  return styleFn;
}
