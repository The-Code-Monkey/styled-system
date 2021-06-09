import { get, createParser } from '../core';
import { css } from '../css';
import { CSSObject } from '../types';

interface Props {
  scale?: string;
  prop?: string;
  variants?: { [x: string]: object };
  key?: string;
}

export const variant = ({
  scale,
  prop = 'variant',
  variants = {},
  key,
}: Props) => {
  let sx: {
    (value: string | number, scale: any, props: { theme: any }): CSSObject;
    scale?: any;
    defaults?: any;
  };

  if (Object.keys(variants).length) {
    sx = (value: string | number, scale: any, props: { theme: any }) =>
      css(get(scale, value, null))(props.theme);
  } else {
    sx = (value: string | number, scale: any) => get(scale, value, null);
  }
  sx.scale = scale || key;
  sx.defaults = variants;
  return createParser({
    [prop]: sx,
  });
};

export const ButtonVariants = variant({ key: 'buttons' });
export const TextVariants = variant({ key: 'text' });
export const IntentVariants = variant({ key: 'intents', prop: 'intent' });
