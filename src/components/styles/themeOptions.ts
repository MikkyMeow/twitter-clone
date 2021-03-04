export const themeOptions = {
  palette: {
    primary: {
      main: '#1DA1F2',
    },
    secondary: {
      main: '#ffffff',
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
      main: '#6A93D1',
    },
    accent: {
      main: '#6769E0',
    },
    success: {
      main: '#499C47',
    },
    text: {
      primary: '#1DA1F2',
      secondary: '#9699B5',
      disabled: '#CFD8E8',
    },
    link: {
      default: '#6A93D1',
      hover: '#5A7EB5',
      active: '#83AFF2',
      disabled: '#CFD8E8',
    },
    button: {
      default: '#6769E0',
      hover: '#7B7DFF',
      active: '#4D4FAF',
      disabled: '#CFD8E8',
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
  },
};
