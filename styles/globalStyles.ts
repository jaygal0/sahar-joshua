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

h1 {
font-size: 3.6rem;
margin-bottom: 2.4rem;
}

h2 {
font-size: 2.7rem;
}
  
h3 {
font-size: 2.1rem;
}
p {
font-size: 1.6rem;
line-height: 1.7;
margin-bottom: 2.4rem;
}
`
export default GlobalStyle
