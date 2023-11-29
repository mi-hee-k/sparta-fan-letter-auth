import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* reset CSS */

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmghDz%2Fbtq106dFmaE%2FYdSWWUAYSJ7KEWntD84vY1%2Fimg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

main {
  padding: 20px;
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  border: none;
}

ul,
ol,
li {
  list-style: none;
  padding-left: 0;
}

`;

export default GlobalStyle;
