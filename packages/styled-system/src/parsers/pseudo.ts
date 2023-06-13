import { compose, createParser, ObjectOrArray } from '../core';
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types';
import { pseudoSelectors } from '../utils';

export interface PseudoProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<keyof ThemeType, ThemeType>
> {
  _hover?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _active?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _focus?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _highlighted?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _focusWithin?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _focusVisible?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _disabled?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _readOnly?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _before?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _after?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _empty?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _expanded?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _checked?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _grabbed?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _pressed?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _invalid?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _valid?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _loading?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _selected?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _hidden?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _autofill?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _even?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _odd?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _first?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _last?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _notFirst?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _notLast?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _visited?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _activeLink?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _indeterminate?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _placeholder?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _fullScreen?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
  _selection?: ObjectOrArray<ResponsiveValue<TVal, ThemeType>>;
}

import { animation } from './animation';
import { background } from './background';
import { border } from './border';
import { color } from './color';
import { extendedFlexbox } from './extendedFlexbox';
import { extendedGrid } from './extendedGrid';
import { flexbox } from './flexbox';
import { grid } from './grid';
import { layout } from './layout';
import { other } from './other';
import { position } from './position';
import { shadow } from './shadow';
import { space } from './space';
import { transition } from './transition';
import { typography } from './typography';

const allConfig = compose(
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

const createPseudoValue =
  (property: keyof typeof pseudoSelectors) => (value, path, props) => {
    const result = {};

    const properties: Array<string> = pseudoSelectors[property];

    if (props?.[property]) {
      result[properties.join(', ')] = allConfig({
        theme: props.theme,
        ...props[property],
      });
    }

    return result;
  };

export const pseudo = props => {
  const config: Record<keyof typeof pseudoSelectors, unknown> = {
    _active: createPseudoValue('_active'),
    _activeLink: createPseudoValue('_activeLink'),
    _after: createPseudoValue('_after'),
    _before: createPseudoValue('_before'),
    _checked: createPseudoValue('_checked'),
    _empty: createPseudoValue('_empty'),
    _even: createPseudoValue('_even'),
    _expanded: createPseudoValue('_expanded'),
    _first: createPseudoValue('_first'),
    _focus: createPseudoValue('_focus'),
    _focusVisible: createPseudoValue('_focusVisible'),
    _focusWithin: createPseudoValue('_focusWithin'),
    _fullScreen: createPseudoValue('_fullScreen'),
    _grabbed: createPseudoValue('_grabbed'),
    _hidden: createPseudoValue('_hidden'),
    _highlighted: createPseudoValue('_highlighted'),
    _indeterminate: createPseudoValue('_indeterminate'),
    _invalid: createPseudoValue('_invalid'),
    _last: createPseudoValue('_last'),
    _loading: createPseudoValue('_loading'),
    _notFirst: createPseudoValue('_notFirst'),
    _notLast: createPseudoValue('_notLast'),
    _odd: createPseudoValue('_odd'),
    _placeholder: createPseudoValue('_placeholder'),
    _pressed: createPseudoValue('_pressed'),
    _readOnly: createPseudoValue('_readOnly'),
    _selected: createPseudoValue('_selected'),
    _selection: createPseudoValue('_selection'),
    _valid: createPseudoValue('_valid'),
    _visited: createPseudoValue('_visited'),
    _hover: createPseudoValue('_hover'),
    _disabled: createPseudoValue('_disabled'),
  };

  return createParser(config)(props);
};
