import { Pseudos } from 'csstype';

import { Theme } from './types';

export function isNumber(n: number | string | object) {
  return typeof n === 'number' && !isNaN(n);
}

export function isObject(
  value: number | string | object | null | (() => unknown)
): value is Record<string, unknown> {
  const type = typeof value;
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !Array.isArray(value)
  );
}

export function isFunction(
  value: string | number | object | (() => unknown)
): value is () => unknown {
  return typeof value === 'function';
}

export function isTheme(value): value is { theme: Theme } {
  return value?.theme;
}

export const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`);

export const defaultTheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export const pseudoSelectors: Record<
  | '_hover'
  | '_active'
  | '_focus'
  | '_highlighted'
  | '_focusWithin'
  | '_focusVisible'
  | '_disabled'
  | '_readOnly'
  | '_before'
  | '_after'
  | '_empty'
  | '_expanded'
  | '_checked'
  | '_grabbed'
  | '_pressed'
  | '_invalid'
  | '_valid'
  | '_loading'
  | '_selected'
  | '_hidden'
  | '_even'
  | '_odd'
  | '_first'
  | '_last'
  | '_notFirst'
  | '_notLast'
  | '_visited'
  | '_activeLink'
  | '_indeterminate'
  | '_placeholder'
  | '_fullScreen'
  | '_selection',
  Array<
    | `&${Pseudos}`
    | `&[${string}]`
    | '&:nth-of-type(even)'
    | '&:nth-of-type(odd)'
    | '&:not(:first-of-type)'
    | '&:not(:last-of-type)'
  >
> = {
  _hover: ['&:hover', '&[data-hover]'],
  _active: ['&:active', '&[data-active]'],
  _focus: ['&:focus', '&[data-focus]'],
  _highlighted: ['&[data-highlighted]'],
  _focusWithin: ['&:focus-within'],
  _focusVisible: ['&:focus-visible'],
  _disabled: ['&[disabled]', '&[aria-disabled=true]', '&[data-disabled]'],
  _readOnly: ['&[aria-readonly=true]', '&[readonly]', '&[data-readonly]'],
  _before: ['&::before'],
  _after: ['&::after'],
  _empty: ['&:empty'],
  _expanded: ['&[aria-expanded=true]', '&[data-expanded]'],
  _checked: ['&:checked', '&[aria-checked=true]', '&[data-checked]'],
  _grabbed: ['&[aria-grabbed=true]', '&[data-grabbed]'],
  _pressed: ['&[aria-pressed=true]', '&[data-pressed]'],
  _invalid: ['&[aria-invalid=true]', '&[data-invalid]'],
  _valid: ['&[data-valid]', '&[data-state=valid]'],
  _loading: ['&[data-loading]', '&[aria-busy=true]'],
  _selected: ['&[aria-selected=true]', '&[data-selected]'],
  _hidden: ['&[hidden]', '&[data-hidden]'],
  _even: ['&:nth-of-type(even)'],
  _odd: ['&:nth-of-type(odd)'],
  _first: ['&:first-of-type'],
  _last: ['&:last-of-type'],
  _notFirst: ['&:not(:first-of-type)'],
  _notLast: ['&:not(:last-of-type)'],
  _visited: ['&:visited'],
  _activeLink: ['&[aria-current=page]'],
  _indeterminate: [
    '&:indeterminate',
    '&[aria-checked=mixed]',
    '&[data-indeterminate]',
  ],
  _placeholder: ['&::placeholder'],
  _fullScreen: ['&:fullscreen'],
  _selection: ['&::selection'],
};
