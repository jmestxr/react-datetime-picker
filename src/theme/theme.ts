import { DefaultTheme } from "styled-components";

const theme = (size: "sm" | "lg"): DefaultTheme => {
  return {
    fontSource: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'normal',
    fontSize: size === "sm" ? '20px' : "25px"
  }
  };
  
export default theme;