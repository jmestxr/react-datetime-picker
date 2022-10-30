"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyles = (0, styled_components_1.createGlobalStyle) `
  @import url('${props => props.theme.fontSource}');

  body {
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeight};
    font-size: ${props => props.theme.fontSize};
    text-rendering: optimizeLegibility;
  }
`;
exports.default = GlobalStyles;
//# sourceMappingURL=GlobalStyles.js.map