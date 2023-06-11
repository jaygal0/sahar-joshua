import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
}

#__next {
  position: relative;
  margin: 0 auto;
  /* overflow-x: clip; */
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
  transition: text-decoration .7s ease-in-out;
}

h1{

      font-family: 'Yeseva One', cursive;
      letter-spacing: 2px;
}

h2, h3, h4, h5, h6 {


  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  line-height: 1.2;
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
font-size: ${theme.type.size.b};
line-height: 1.7;

@media screen and (max-width:${theme.breakPoint.deskmd} ) {
font-size: ${theme.type.size.c};
}
@media screen and (max-width:${theme.breakPoint.phonelg} ) {
font-size: ${theme.type.size.d};
}

}
button {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}
`
export default GlobalStyle
