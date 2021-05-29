export default {
  colors: {
    primary: '#FF0000',
    white: '#fff',
    black: '#000',
    sucess: '#69dd95',
    error: '#ff0033',
    gardientButton: 'linear-gradient(to top,  #A90329,  rgb(32, 1, 1));',
  },
  colorsNav: {
    transparent: 'transparent',
    black: '#000',
    transparentBlack: 'rgba(0, 0, 0, 0.788)',
    textNav: '#fff',
    bag: '#fff',
    textInputSearch: '#fff',
    iconNav: {
      icon: '#fff',
      iconHover: '#FF0000',
    },
    iconModal: {
      icon: '#000',
      iconActive: 'rgba(0, 0, 0, 0.1)',
    },
  },
  menuOpen: {
    colorPrimary: '#fff',
  },
  userOpen: {
    colorPrimary: '#fff',
    fontColor: '#000',
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
