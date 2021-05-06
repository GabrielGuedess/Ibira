import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @font-face {
      font-family: 'Playfair Display SC';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/playfair-display-sc-v10-latin-regular.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/work-sans-v9-latin-regular.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Be Vietnam';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/be-vietnam-v2-latin-regular.woff2') format('woff2')
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Be Vietnam', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 2000px;
  }

  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to top, #6d0019 0%, #a90329 100%);
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

  ::-webkit-scrollbar-track {
    background: #131313;
  }

  ::selection {
    background: red;
  }
`;

export default GlobalStyles;
