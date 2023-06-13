import { Property } from 'csstype';

import { system, SystemConfig } from '../core';
import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { defaultTheme } from '../utils';

export interface GridProps<ThemeType extends Theme = RequiredTheme> {
  gridGap?: ResponsiveValue<Property.GridGap<TLengthStyledSystem>, ThemeType>;
  gap?: ResponsiveValue<Property.Gap<TLengthStyledSystem>, ThemeType>;
  gridRowGap?: ResponsiveValue<
    Property.GridRowGap<TLengthStyledSystem>,
    ThemeType
  >;
  rowGap?: ResponsiveValue<Property.RowGap<TLengthStyledSystem>, ThemeType>;
  gridColumnGap?: ResponsiveValue<
    Property.GridColumnGap<TLengthStyledSystem>,
    ThemeType
  >;
  columnGap?: ResponsiveValue<
    Property.ColumnGap<TLengthStyledSystem>,
    ThemeType
  >;
  gridRow?: ResponsiveValue<Property.GridRow, ThemeType>;
  gridColumn?: ResponsiveValue<Property.GridColumn, ThemeType>;
  gridAutoFlow?: ResponsiveValue<Property.GridAutoFlow, ThemeType>;
  gridAutoRows?: ResponsiveValue<
    Property.GridAutoRows<TLengthStyledSystem>,
    ThemeType
  >;
  gridAutoColumns?: ResponsiveValue<
    Property.GridAutoColumns<TLengthStyledSystem>,
    ThemeType
  >;
  gridTemplateRows?: ResponsiveValue<
    Property.GridTemplateRows<TLengthStyledSystem>,
    ThemeType
  >;
  gridTemplateColumns?: ResponsiveValue<
    Property.GridTemplateColumns<TLengthStyledSystem>,
    ThemeType
  >;
  gridTemplateAreas?: ResponsiveValue<Property.GridTemplateAreas, ThemeType>;
  gridArea?: ResponsiveValue<Property.GridArea, ThemeType>;
}

const config: SystemConfig<string> = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  columnGap: {
    property: 'columnGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridRow: {
    property: 'gridRow',
  },
  gridColumn: {
    property: 'gridColumn',
  },
  gridAutoFlow: {
    property: 'gridAutoFlow',
  },
  gridAutoRows: {
    property: 'gridAutoRows',
  },
  gridAutoColumns: {
    property: 'gridAutoColumns',
  },
  gridTemplateRows: {
    property: 'gridTemplateRows',
  },
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
  },
  gridTemplateAreas: {
    property: 'gridTemplateAreas',
  },
  gridArea: {
    property: 'gridArea',
  },
};

export const grid = system(config);
