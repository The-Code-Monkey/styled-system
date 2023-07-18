import styled from 'styled-components';

import { compose } from '../core';
import { css } from '../css';
import { color } from '../parsers/color';
import { layout } from '../parsers/layout';

const TestCompose = compose(layout, color);

export const StyledSpan = styled.span`
  * {
    ${TestCompose}
    ${
      css({
        backgroundColor: 'garble'
      })
    }
  }
`;
