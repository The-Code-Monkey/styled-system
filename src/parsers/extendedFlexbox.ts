import { compose, system, SystemConfig } from '../core';
import { RequiredTheme, Theme } from '../types';
import { flexbox, FlexboxProps } from './flexbox';

export interface ExtendedFlexboxProps<ThemeType extends Theme = RequiredTheme>
  extends FlexboxProps<ThemeType> {
  align?: FlexboxProps['alignItems'];
  justify?: FlexboxProps['justifyContent'];
  wrap?: FlexboxProps['flexWrap'];
  direction?: FlexboxProps['flexDirection'];
}

const extendedConfig: SystemConfig = {
  align: {
    property: 'alignItems',
  },
  justify: {
    property: 'justifyContent',
  },
  wrap: {
    property: 'flexWrap',
  },
  direction: {
    property: 'flexDirection',
  },
};

export const extendedFlexbox = compose(flexbox, system(extendedConfig));
