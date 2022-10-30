import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('${props => props.theme.fontSource}');

  body {
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeight};
    font-size: ${props => props.theme.fontSize};
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyles;