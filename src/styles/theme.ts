export default {
  colors: {
    primary: 'red',
    black: 'black',
  },
  colorsNav: {
    transparent: 'transparent',
    black: 'black',
    transparentBlack: 'rgba(0, 0, 0, 0.788)',
    textNav: 'white',
    bag: 'white',
    textInputSearch: 'white',
    iconNav: {
      icon: 'white',
      iconHover: 'red',
    },
    iconModal: {
      icon: 'black',
      iconActive: 'rgba(0, 0, 0, 0.1)',
    },
  },
  menuOpen: {
    colorPrimary: 'white',
  },
  font: {
    fontPrimary:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontHeading:
      "Playfair Display SC, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontNav:
      "Work Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      sizeFontNav: '1.8rem',
      sizeFontBag: '1.1rem',
    },
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    closeNavMenu: 40,
    modal: 50,
    alwaysOnTop: 60,
  },
} as const;
