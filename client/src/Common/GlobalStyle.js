import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.toggle ? 'beige' : 'white')};
  }
  html, body, #root{
    height: 100%;
  }
  .container{
    height: 100%;
  }
`
