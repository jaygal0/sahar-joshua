import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  font-family: linotype-didot, serif;
  font-weight: 400;
  font-style: normal;
}

#__next {
  position: relative;
  overflow-x: clip;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: underline;
  font-size: 1.6rem;
  color: #1C1C1C;
  line-height: 1.7;
}

h1, h2, h3, h4, h5, h6 {
  font-family: linotype-didot, serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
font-size: 3.6rem;
margin-bottom: .8rem;
}

h2 {
font-size: ${theme.type.size.a};
}
  
h3 {
font-size: ${theme.type.size.b};
}
p {
font-size: ${theme.type.size.c};
line-height: 1.7;
}
button {
  font-family: linotype-didot, serif;
}
`
export default GlobalStyle
