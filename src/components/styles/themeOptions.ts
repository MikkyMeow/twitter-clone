export const themeOptions = {
  palette: {
    primary: {
      light: '#6cd2ff',
      main: '#1DA1F2',
      dark: '#0073bf',
    },
    secondary: {
      light: '#ffffff',
      main: '#274A9D',
      dark: '#000000',
    },
    error: {
      main: '#EB7070',
    },
    warning: {
      main: '#EBD070',
    },
    logo: {
      main: '#566385',
    },
    hyperLink: {
      main: '#5B7082',
    },
    success: {
      main: '#499C47',
    },
    text: {
      primary: '#1DA1F2',
      secondary: '#5B7082',
      disabled: '#CFD8E8',
    },
    link: {
      default: '#6A93D1',
      hover: '#5A7EB5',
      active: '#83AFF2',
      disabled: '#CFD8E8',
    },
    button: {
      default: '#1DA1F2',
      hover: '#6cd2ff',
      active: '#0073bf',
      disabled: '#8d888c6cd2ff',
    },
    tags: {
      error: '#FFEEEE',
      success: '#E9FAEE',
      waiting: '#E5EEFF',
      draft: '#F0F4FB',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        height: 40,
        borderRadius: 40,
        fontWeight: 600,
      },
      containedPrimary: {
        backgroundColor: '#1DA1F2',
        color: '#ffffff',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    h2: {
      fontSize: 22,
      fontWeight: 700,
    },
  },
};
