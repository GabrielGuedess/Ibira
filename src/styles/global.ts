import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

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
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;

    ${media.lessThan('large')`
      width: 0.4rem;
      height: 0.4rem;
    `}
}

  ::-webkit-scrollbar-track {
    background: #131313;
  }

  ::selection {
    background: red;
  }

  #nprogress {
    pointer-events: none;

    .bar {
      background: linear-gradient(to left,#6d0019 0%,#a90329 100%);

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 3px;
    }
    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 0.5rem #a90329, 0 0 1rem #a90329;
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
  }
`;

export default GlobalStyles;
