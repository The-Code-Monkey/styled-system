import { compose, system, SystemConfig } from '../core';
import { RequiredTheme, Theme } from '../types';
import { grid, GridProps } from './grid';

export interface ExtendedGridProps<ThemeType extends Theme = RequiredTheme>
  extends GridProps<ThemeType> {
  row?: GridProps['gridRow'];
  column?: GridProps['gridColumn'];
  autoFlow?: GridProps['gridAutoFlow'];
  autoRows?: GridProps['gridAutoRows'];
  autoColumns?: GridProps['gridAutoColumns'];
  templateRows?: GridProps['gridTemplateRows'];
  templateColumns?: GridProps['gridTemplateColumns'];
  templateAreas?: GridProps['gridTemplateAreas'];
  area?: GridProps['gridArea'];
}

const extendedConfig: SystemConfig = {
  row: {
    property: 'gridRow',
  },
  column: {
    property: 'gridColumn',
  },
  autoFlow: {
    property: 'gridAutoFlow',
  },
  autoRows: {
    property: 'gridAutoRows',
  },
  autoColumns: {
    property: 'gridAutoColumns',
  },
  templateRows: {
    property: 'gridTemplateRows',
  },
  templateColumns: {
    property: 'gridTemplateColumns',
  },
  templateAreas: {
    property: 'gridTemplateAreas',
  },
  area: {
    property: 'gridArea',
  },
};

export const extendedGrid = compose(grid, system(extendedConfig));
