import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.toggle ? "#F7F9FF" : "#20222F")};
  }

  header{
    background: ${props => (props.toggle ? "#20222F" : "#F7F9FF")};
    color: ${props => (props.toggle ? "#F7F9FF" : "#20222F")};
  }

`;
