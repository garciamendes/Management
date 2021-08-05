// Third party
import { createGlobalStyle } from 'styled-components';

// Local
import { COLORS } from './variables';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal
  }

  html, body, #root {
    height: 100%;
    background-color: ${COLORS.Background};
  }

  img {
    object-fit: cover;
  }

`;