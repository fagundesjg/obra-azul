import { createMuiTheme } from '@material-ui/core';

const materialTheme = {
  dark: createMuiTheme({
    palette: {
      type: 'dark',
    },
  }),
  light: createMuiTheme({
    palette: {
      type: 'light',
    },
  }),
};

export { materialTheme };
