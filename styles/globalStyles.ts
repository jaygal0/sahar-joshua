import { createGlobalStyle } from 'styled-components'

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
  text-decoration: none;
  color: #1C1C1C;
}

h1, h2, h3, h4, h5, h6 {
  font-family: linotype-didot, serif;
  font-weight: 400;
  font-style: normal;
}

.image-hover {
  &:hover {
  cursor: zoom-in;
  }
}
`
export default GlobalStyle
