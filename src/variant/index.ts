import { createParser, get } from '../core';
import { css } from '../css';

interface Props {
  scale?: string;
  prop?: string;
  variants?: { [x: string]: object };
  key?: string;
}

export const variant = ({ prop = 'variant', key }: Props) => {
  const sx = (value, scale, props) => css(get(scale, value, null))(props.theme);
  sx.scale = key
    ? key.includes('defaultStyles')
      ? key
      : `variants.${key}`
    : `variants`;

  sx.defaults = {};
  return createParser({
    [prop]: sx,
  });
};

export const ButtonVariants = variant({ key: 'buttons' });
export const TextVariants = variant({ key: 'text' });
export const IntentVariants = variant({ key: 'intents', prop: 'intent' });
export const defaultStyles = variant({
  key: 'defaultStyles',
  prop: 'defaultStyles',
});
