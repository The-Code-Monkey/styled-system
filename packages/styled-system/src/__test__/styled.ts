import styled from "styled-components";
import {compose} from "../core";
import {layout} from "../parsers/layout";
import {color} from "../parsers/color";

const TestCompose = compose(
  layout,
  color
)

export const StyledSpan = styled.span`
  ${TestCompose}
`