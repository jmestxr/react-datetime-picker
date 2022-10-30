import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSource: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
  }
}
